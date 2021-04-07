import React from 'react'
import { signInWithGoogle } from '../../Firebase/firebase'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })

    }

    handleChainge = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already haw an acaunt</h2>
                <span> Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChainge={this.handleChainge}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChainge={this.handleChainge}
                        label='password'
                        required
                    />
                    <div className ='buttons'>
                        <CustomButton type='submit' > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn