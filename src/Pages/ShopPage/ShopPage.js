import React from 'react'
import PreviewColection from '../../Components/PreviewColection/PreviewColection'
/* import './homepage.styles.scss' */
import SHOP_DATA from './shop.data'


class  ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collection:SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state
        return(
            <div className = 'shop-page'>
                {
                    collection.map( ({id, ...otherCollectionProps}) => {
                        return(
                            <PreviewColection key = {id} {...otherCollectionProps} />
                        )
                    })
                }   
            </div> 
        )
    }
}
export default ShopPage