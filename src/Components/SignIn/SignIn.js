import React from 'react'
import { connect } from 'react-redux'
import { EmailSignInStart, GoogleSignInStart } from '../../Redux/user/user-actions'
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
        /* this.setState({ email: '', password: '' })
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }catch(error){
            console.log(error)

        } */
        const {email, password} = this.state
        const {EmailSignInStart} = this.props
        EmailSignInStart(email,password)
        this.setState({email: '', password: ''})
    }

    handleChainge = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const {googleSignInStart} = this.props
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
                        <CustomButton type = "button" onClick={googleSignInStart} isGoogleSignIn > Sign In with Google </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(GoogleSignInStart()),
    EmailSignInStart: (email,password) => dispatch(EmailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)