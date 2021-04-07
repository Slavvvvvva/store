import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'



const SignInSignUpPage = (props) => (
    
    <div className='sign-in-and-sign-up'>
      <SignIn/>
      <SignUp/>
    </div>
    

)
export default SignInSignUpPage