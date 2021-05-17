import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { EmailSignInStart, GoogleSignInStart } from '../../Redux/user/user-actions'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'

import './sign-in.styles.scss'

const SignIn = ( ) => {
    
    let [loginData, chaingeLoginData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const googleSignInStarts = () => dispatch(GoogleSignInStart())
    const EmailSignInStarts = (email, password) => dispatch(EmailSignInStart({ email, password }))

    const handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = loginData
        EmailSignInStarts(email, password)
        chaingeLoginData({ email: '', password: '' })
    }

    const handleChainge = e => {
        const { value, name } = e.target
        chaingeLoginData({...loginData, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already haw an acaunt</h2>
            <span> Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={loginData.email}
                    handleChainge={handleChainge}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={loginData.password}
                    handleChainge={handleChainge}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit' > Sign In </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStarts} isGoogleSignIn > Sign In with Google </CustomButton>
                </div>

            </form>
        </div>
    )

}

export default SignIn 