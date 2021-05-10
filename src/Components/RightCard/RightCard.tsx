import React, { useState } from 'react';
import styles from './RightCard.module.scss';
//import EyeSlash from '../../Assets/Images/EyeSlash.png'

type LoginDetails = {
    email: string,
    password: string,
    errorMessage: { email: string; password: string; }
    isFormCompleted: boolean
}

interface LoginProps{
}

class LeftCard extends React.Component<LoginProps, LoginDetails>  {
   constructor(props : LoginProps)
   {
       super(props)
        this.state = {
            email: '',
            password: '',
            errorMessage: {
                email: '',
                password: ''
            },
            isFormCompleted: false
        }
   }
   
    // Function that is invoked if form is submitted
    // Checks if email or password input vaôue is empty
    // Checks if input value is valid
    handleSubmit = (event : any) => {
        if(
            this.state.errorMessage.email !== "Email is not valid!" && 
            this.state.errorMessage.password !== "Password must be at least 8 characters long! And Contains at least one numeric" &&
            this.state.email !== "" &&
            this.state.password !== ""){
            window.alert("Valid Form")
        }
        else{
            window.alert('Invalid Form')
        }
    }
    
    // Function that is invoked if input is changed
    // Checks if email and password is in good format
    // If valid is not valid changes state of ErrorMessage by input name (email or password)
    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errorMessage;
        let emailConditions = ["@", "."];
        const regex = /\d/;
        switch (name) {
          case 'email': 
            errors.email = 
                emailConditions.some(el => value.includes(el))
                ? '' : 'Email is not in valid format!';
            break;
            case 'password': 
            errors.password = 
              value.length < 6 || !(regex.test(value))
                ? 'Password must be at least 8 characters long and contains at least one numeric' : '';
            break;
          default:
            break;
        }
        //@ts-ignore
        this.setState({errors, [name]: value});
      }

    render(){
    return(
        <div className={styles.Wrapper}>
            <div className={styles.RightCard }>
                <div className={styles.Login_Headline_Wrapper}>
                    <p>User <span>login</span></p>
                    <div className={styles.Dashline}>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className={styles.FormWrapper} method="get" autoComplete="off">
                    <p  className={styles.formText}>
                        Email
                    </p>
                    <input id="email" type="email" name='email'  onChange={this.handleChange} className={this.state.errorMessage.email.length > 0  ? styles.FormErrorEmailInput : styles.FormInput}/>
                    <p className={styles.ErrorMessage}>
                    {
                    // Checks if the ErrorMessage property-email is set if yes return error message
                    this.state.errorMessage.email.length > 0 && 
                    <span className='error'>{this.state.errorMessage.email}</span>}
                    </p>
                    <p  className={styles.formText}>
                        Password
                    </p>
                    <input id="password" onChange={this.handleChange} type="password" name='password' className={ this.state.errorMessage.password.length > 0  ? styles.FormErrorPasswordInput : styles.FormInput}/>
                    <p className={styles.ErrorMessage}>
                        {
                        // Checks if the ErrorMessage property-password is set if yes return error message
                        this.state.errorMessage.password.length > 0 && 
                        <span className='error'>{this.state.errorMessage.password}</span>}
                    </p>
                    <div className={styles.bottomFormActions}>
                        <label>
                            <input type="radio"/>
                            <span className={styles.CheckBoxText}>Remember me?</span>
                        </label>
                        <label>
                            <a href="/">Forgot Passowrd?</a>
                        </label>
                    </div>
                    <div className={styles.ButtonWrapper}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default LeftCard;