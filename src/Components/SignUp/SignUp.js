import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { signUpSessionStart } from '../../Redux/user/user-actions'
import {selectSuccesMasage} from '../../Redux/user/user-selektor'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state= {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {password,confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert('password dont match')
            return
        }
        /* try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})

            this.setState (
                {
                    displayName: '',
                    email: '',
                    password:'',
                    confirmPassword:''
                }
            )    
        } catch (error) {
            console.error(error)
        } */
        const {signUpSessionStart} = this.props
        signUpSessionStart(this.state)
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState ({[name]: value})
    }

    render(){
        const {displayName, email,password,confirmPassword} = this.state
        const {succesMasage} = this.props
        return(
            <div className = 'sign-up'>
                <h2 className = 'title'>I do not have a acaunt</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit} >
                    <FormInput
                        type ='text'
                        name ='displayName'
                        value ={displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    
                    <FormInput
                        type ='email'
                        name ='email'
                        value ={email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    
                    <FormInput
                        type ='password'
                        name ='password'
                        value ={password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                    
                    <FormInput
                        type ='password'
                        name ='confirmPassword'
                        value ={confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <CustomButton type= 'submit'> { succesMasage ||'Sign Up'} </CustomButton>
                    
                </form>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    succesMasage: selectSuccesMasage,
})
const mapDispatchToProps = (dispatch) => ({
    signUpSessionStart: (signUpData) => dispatch(signUpSessionStart(signUpData))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp)