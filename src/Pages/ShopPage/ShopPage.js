
import React from 'react'
import { Route } from 'react-router'
import ColectionsOwereiew from '../../Components/Collections-overview/ColectionsOwereiew'
import CollectionPage from '../CollectionPage/CollectionPage'
import { fatchCollectionSrartAsync} from '../../Redux/shop/shop-actions'
import { connect } from 'react-redux'
import WithSpinner from '../../Components/WithSpier/WithSpiner'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFatching, selectIsCollectionLoaded } from '../../Redux/shop/shop-selectors'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)
const CollectionOwerviewWithSpinner = WithSpinner(ColectionsOwereiew)
class ShopPage extends React.Component  {
    
    componentDidMount(){
      const {fatchCollectionSrartAsync} = this.props
      fatchCollectionSrartAsync()
    }

    render() {
        const {match, isCollectionLoaded} = this.props
        
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.path}`} render = { (props) => <CollectionOwerviewWithSpinner isLoading={!isCollectionLoaded} {...props}/> } />
                <Route  path ={`${match.path}/:collectionId`} render = { (props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/> }/>      
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch => ({
    fatchCollectionSrartAsync: () => dispatch(fatchCollectionSrartAsync())
})
const mapStateToProps = createStructuredSelector({
    isCollectionFatching: selectIsCollectionFatching,
    isCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)