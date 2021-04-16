import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../Redux/shop/shop-selectors'
import PreviewColection from '../PreviewColection/PreviewColection'
import './collections-overview.styles.scss'

const CollectionsOverview  = ({collections}) => {
    return(
        <div className ='collectionsj-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => {
                return (
                    <PreviewColection key={id} {...otherCollectionProps} />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)