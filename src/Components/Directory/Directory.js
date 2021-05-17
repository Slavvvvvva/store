import React from 'react'
import { useSelector } from 'react-redux'
import { selectDirectorySection } from '../../Redux/directory/diarectory-selector'
import MenuItem from '../Menu-item/Menu-Item'
import './directory.styles.scss'



const Directory = () => {

  const sections = useSelector(selectDirectorySection)

  return (
    <div className='directory-menu'>
      {
        sections.map(({id, ...otherProps}) => {
          return (<MenuItem key={id} {...otherProps} />)
        })
      }
    </div>
  )
}

export default Directory