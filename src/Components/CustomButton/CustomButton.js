import React from 'react'
import './custom-button-styles.js'
import { CustomButtonContainear } from './custom-button-styles.js'

const CustomButton = ({children, ...props}) => {
    return (
        <CustomButtonContainear {...props}>
              {children}
        </CustomButtonContainear>
    )

}
export default CustomButton