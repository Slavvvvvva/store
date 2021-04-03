import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './collection-preview.styles.scss'


const PreviewColection = ({title,items}) => (

    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className ='preview'>
            {
                items.filter((item, idx) => idx < 4).map( ({id , ...otherItemProps}) => {
                    return(
                        <CollectionItem key ={id} {...otherItemProps}/>
                    ) 
                })
            }
        </div>
    </div>

)
export default PreviewColection