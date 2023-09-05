import React from 'react'
import './style.css';

import Auth from '../utils/auth'

const Cookbook = () => {
    // if (!Auth.loggedIn()) {
    //     return (
    //         <h3>
    //             You must have an account to manage your own cookbook. Please click the login button on the top of the page to create an account.
    //         </h3>
    //     )
    // }
    
    return <div>
        <h1>Your cookbook</h1>
        <p>Here you will be able to view your saved recipes as well as submit your own!</p>

        <div>
            <h2>Want to submit your own recipe? You can do so here!</h2>
            <form>
                <div>
                    <label htmlFor="text">
                        Name
                        <input type="text" name="name" />
                    </label>
                    <label htmlFor="text">
                        Ingredients (Separate each ingredient by a comma. Example: Eggs, Bread, Milk)
                        <input type="text" name="ingredients" />
                    </label>
                    <label htmlFor="text">
                        Instructions
                        <input type="text" name="instructions"></input>
                    </label>
                    <label htmlFor="text">
                        Type
                        <select>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snack">Snack</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    </div>
}

export default Cookbook