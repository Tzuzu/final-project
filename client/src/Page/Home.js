import React from 'react'
import './style.css';
import { Link } from'react-router-dom';


const Home = () => {
    return( 
    <>
    <div>
        <i />
        <p> Welcome to everyone's cookbook! You may browse the site to find recipes you like, otherwise please checkout your 
            cookbook page to create and manage your own!
        </p>

        <h2> Recipes </h2>
        <h3> What are you in the mood for? </h3>
        <ul>
            <li>
                <Link to='/breakfast'>Breakfast</Link>
            </li>
            <li>
                <Link to='/lunch'>Lunch</Link>
            </li>
            <li>
                <Link to='/dinner'>Dinner</Link>
            </li>
            <li>
                <Link to='/snacks'>Snacks</Link>
            </li>
        </ul>
    </div>
    </>
)}

export default Home