import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { signUpSessionStart } from '../../Redux/user/user-actions'
import { selectSuccesMasage } from '../../Redux/user/user-selektor'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './sign-up.styles.scss'

const SignUp = ({ signUpSessionStart, succesMasage }) => {
    
    let [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(signUpData)
        const { password, confirmPassword } = signUpData

        if (password !== confirmPassword) {
            alert('password dont match')
            return
        }
        signUpSessionStart(signUpData)
    }

    const handleChange = e => {
        const { name, value } = e.target

        setSignUpData({ ...signUpData, [name]: value })
    }

    const { displayName, email, password, confirmPassword } = signUpData

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a acaunt</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> {succesMasage || 'Sign Up'} </CustomButton>

            </form>
        </div>
    )


}

const mapStateToProps = createStructuredSelector({
    succesMasage: selectSuccesMasage,
})
const mapDispatchToProps = (dispatch) => ({
    signUpSessionStart: (signUpData) => dispatch(signUpSessionStart(signUpData))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp)