import React from 'react'
import classes from './Login.module.css'
import cx from 'classnames'

const Login = ({ closeModal, isModal }) => {
    let modal = (
        <div className={classes.Modal}>
            <form className={cx(classes.ModalContent, classes.animate)}>
                <div className={classes.closeContainer}>
                    <span  className={classes.Close} title="Close Modal" onClick={ closeModal }>&times;</span>
                </div>
                <div className={classes.Container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" className={classes.button}>Login</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <div className={classes.Container} style={{backgroundColor: '#f1f1f1'}}>
                    <button  type="button" className={cx(classes.cancelBtn, classes.button)} onClick={closeModal}>Cancel</button>
                    <span className={classes.Psw}>Forgot <a href="/ #">password?</a></span>
                </div>
            </form>
        </div>
    )
    if(!isModal){
        modal = null
    }

    return (
        <div>
            { modal }
        </div>
    )
}

export default Login
