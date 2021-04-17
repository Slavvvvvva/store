import React from 'react'
import { Route } from 'react-router'
import ColectionsOwereiew from '../../Components/Collections-overview/ColectionsOwereiew'
import CollectionPage from '../CollectionPage/CollectionPage'

const ShopPage = ({match}) => {
    
    return (
        <div className='shop-page'>
            <Route exact path ={`${match.path}`} component = {ColectionsOwereiew}/>
            <Route  path ={`${match.path}/:collectionId`} component = {CollectionPage}/>      
        </div>
    )

}

export default ShopPage