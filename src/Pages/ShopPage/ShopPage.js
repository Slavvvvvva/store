import React from 'react'
import { Route } from 'react-router'
import { fatchCollectionSrartAsync} from '../../Redux/shop/shop-actions'
import { connect } from 'react-redux'
import { CollectionOverviewContainer } from '../../Components/Collections-overview/CollectionOverviewContainer'
import { CollectionPageContainer } from '../CollectionPage/CollectionPageContainer'


class ShopPage extends React.Component  {
    
    componentDidMount(){
      const {fatchCollectionSrartAsync} = this.props
      fatchCollectionSrartAsync()
    }

    render() {
        const {match} = this.props
        
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.path}`} component= {CollectionOverviewContainer} />
                <Route  path ={`${match.path}/:collectionId`} component= {CollectionPageContainer}/>      
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch => ({
    fatchCollectionSrartAsync: () => dispatch(fatchCollectionSrartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage)