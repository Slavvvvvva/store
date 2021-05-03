import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrapedCoponent => ({isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): (
        <WrapedCoponent {...otherProps}/>
    )
} 

export default WithSpinner