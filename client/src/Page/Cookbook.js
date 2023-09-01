import React from 'react'
import './style.css';

import Auth from '../utils/auth'

const Cookbook = () => {
    if (!Auth.loggedIn()) {
        return (
            <h3>
                You must have an account to manage your own cookbook. Please click the login button on the top of the page to create an account.
            </h3>
        )
    }
    
    return <div>
        <h1>Your cookbook</h1>
        <p>Here you will be able to view your saved recipes as well as submit your own!</p>
    </div>
}

export default Cookbook