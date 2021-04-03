import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChainge, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input
                className='form-input'
                onChange = {handleChainge}
                {...otherProps}
            />
            {
                label ? 
                <label className={`${otherProps.value.length? 'shrink':''} form-input-label`}>{label}</label>
                : null
            }
        </div>
    )

}
export default FormInput