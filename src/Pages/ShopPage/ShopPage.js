import React from 'react'
import { Route } from 'react-router'
import { fatchCollectionSrart} from '../../Redux/shop/shop-actions'
import { connect } from 'react-redux'
import { CollectionOverviewContainer } from '../../Components/Collections-overview/CollectionOverviewContainer'
import { CollectionPageContainer } from '../CollectionPage/CollectionPageContainer'


class ShopPage extends React.Component  {
    
    componentDidMount(){
      const {fetchCollectionStart} = this.props
      fetchCollectionStart()
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
    fetchCollectionStart: () => dispatch(fatchCollectionSrart())

})


export default connect(null, mapDispatchToProps)(ShopPage)