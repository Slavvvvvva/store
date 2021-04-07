import React from 'react'
import { auth, signInWithGoogle } from '../../Firebase/firebase'
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }catch(error){
            console.log(error)

        }
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
                        <CustomButton type = "button" onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn