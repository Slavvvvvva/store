import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addItem } from '../../Redux/cart/cart-action'
import CustomButton from '../CustomButton/CustomButton'
import './collection-item.styles.scss'


const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item
    const dispatch = useDispatch()
    const addItemToCart = (item) => dispatch(addItem(item))
    return (
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick ={()=>addItemToCart(item)} inverted className ='custom-button'> Add to cart </CustomButton>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)