import { render } from '@testing-library/react'
import React from 'react'
import { Route } from 'react-router'
import ColectionsOwereiew from '../../Components/Collections-overview/ColectionsOwereiew'
import CollectionPage from '../CollectionPage/CollectionPage'
import {convertCollectionsSnapshotToMap, firestore} from '../../Firebase/firebase'
import { updateCollections } from '../../Redux/shop/shop-actions'
import { connect } from 'react-redux'

class ShopPage extends React.Component  {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {updateCollections} = this.props
        const collectjionRef = firestore.collection('collections')
        collectjionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })

    }

    render() {
        const {match} = this.props
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.path}`} component = {ColectionsOwereiew}/>
                <Route  path ={`${match.path}/:collectionId`} component = {CollectionPage}/>      
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)