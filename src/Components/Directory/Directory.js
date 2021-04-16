import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../Redux/directory/diarectory-selector'
import MenuItem from '../Menu-item/Menu-Item'
import './directory.styles.scss'



const Directory = ({sections}) => {

  return (
    <div className='directory-menu'>
      {
        sections.map((item) => {
          return (<MenuItem key={item.id} title={item.title} img={item.imageUrl} size={item.size} />)
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)