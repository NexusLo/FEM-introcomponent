import './styles.css'
import iconerror from '../../assets/images/icon-error.svg'
import desktopImg from '../../assets/images/bg-intro-desktop.png'
import mobileImg from '../../assets/images/bg-intro-mobile.png'
import { useState } from "react"

export default function Landing () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateForm = () => {
        let isValid = true;
    
        if (firstName.trim() === '') {
          setFirstNameError('First Name cannot be empty');
          isValid = false;
        }
    
        if (lastName.trim() === '') {
          setLastNameError('Last Name cannot be empty');
          isValid = false;
        }
    
        if (!validateEmail(email)) {
          setEmailError('Looks like this is not an email!');
          isValid = false;
        }
    
        if (password.trim() === '') {
          setPasswordError('Password cannot be empty');
          isValid = false;
        }
        return isValid;
      };
    
      const handleClaimFreeTrial = () => {
        if (validateForm()) {

          console.log('Form submitted successfully');
        } else {
          console.log('Form validation failed');
        }
      };
      const validateEmail = (email) => {
        const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        return re.test(email);
      };

    return (

        <div className='wrapper'>
            <div className='maindiv'>
                    <div className='left'>
                        <h1 className='left__headline'>Learn to code by watching others</h1>
                        <p className='left__txt'>See how experienced developers solve problems in real-time.
                        Watching scripted tutorials is great, but udnerstanding how developers think is invaluable.
                        </p>
                    </div>  
                    <div className='right'>
                        <div className='right__headline'><p className='right__headlinetxt'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p></div>
                            <div className='right__form'>
                                <div className='form__inputcontainer'>
                                    <input 
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => {
                                                            setFirstName(e.target.value)
                                                            setFirstNameError('')}}
                                        placeholder="First Name"
                                        className='form__input'/>
                                        {firstNameError && <div className='form__input-errorstate'>{firstNameError}</div>}
                                        {firstNameError && <img src={iconerror}
                                                                alt='error'
                                                                className='form__input-erroricon' 
                                                            />
                                        }
                                </div>
                                    <div className='form__inputcontainer'>
                                        <input
                                            type="text" 
                                            value={lastName} 
                                            onChange={(e) => { 
                                                                setLastName(e.target.value)
                                                                setLastNameError('')}}
                                            placeholder="Last Name"
                                            className='form__input'/>
                                            {lastNameError && <div className='form__input-errorstate'>{lastNameError}</div>}
                                            {lastNameError && <img src={iconerror}
                                                                alt='error'
                                                                className='form__input-erroricon' 
                                                            />
                                            }
                                </div>
                                <div className='form__inputcontainer'>
                                    <input
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => { 
                                                            setEmail(e.target.value)
                                                            setEmailError('')}}
                                        placeholder="Email Address"
                                        className='form__input'/>
                                        {emailError && <div className='form__input-errorstate'>{emailError}</div>}
                                        {emailError && <img src={iconerror}
                                                            alt='error'
                                                            className='form__input-erroricon' 
                                                        />
                                        }
                                </div>
                                <div className='form__inputcontainer'>
                                    <input
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => {  
                                                            setPassword(e.target.value) 
                                                            setPasswordError('')}}
                                        placeholder="Password"
                                        className='form__input'/>
                                        {passwordError && <div className='form__input-errorstate'>{passwordError}</div>}
                                        {passwordError && <img src={iconerror}
                                                            alt='error'
                                                            className='form__input-erroricon' 
                                                        />
                                        }
                                </div>
                            <button 
                                    onClick={handleClaimFreeTrial}
                                    className='form__btn'>CLAIM YOUR FREE TRIAL</button>
                            <span className='form__terms'>By clicking the button, you are agreeing to our <span className='form__terms-red'>Terms and Services</span></span>
                        </div>
                    </div>
                </div>
        </div>
    )
}