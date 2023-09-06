import React from 'react'
import './style.css';
import RecipeForm from '../components/RecipeForm';

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
        <div>
            <RecipeForm />
        </div>
    </div>
}
export default Cookbook;