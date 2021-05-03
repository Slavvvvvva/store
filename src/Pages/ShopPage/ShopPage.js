
import React from 'react'
import { Route } from 'react-router'
import ColectionsOwereiew from '../../Components/Collections-overview/ColectionsOwereiew'
import CollectionPage from '../CollectionPage/CollectionPage'
import {convertCollectionsSnapshotToMap, firestore} from '../../Firebase/firebase'
import { updateCollections } from '../../Redux/shop/shop-actions'
import { connect } from 'react-redux'
import WithSpinner from '../../Components/WithSpier/WithSpiner'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)
const CollectionOwerviewWithSpinner = WithSpinner(ColectionsOwereiew)
class ShopPage extends React.Component  {
    
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {updateCollections} = this.props
        const collectjionRef = firestore.collection('collections')
        collectjionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
        

    }

    render() {
        const {match} = this.props
        const {loading} = this.state
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.path}`} render = { (props) => <CollectionOwerviewWithSpinner isLoading={loading} {...props}/> } />
                <Route  path ={`${match.path}/:collectionId`} render = { (props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> }/>      
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)