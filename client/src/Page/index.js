import React from 'react'
import Login from './Login'
import Cookbook from './Cookbook'
import Home from './Home'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Snacks from './Snacks'
import './style.css'

const Page = ({currentPage}) => {
    const renderPage = (page) => {
        switch (page) {
            case 'cookbook':
                return <Cookbook />;
            case 'login':
                return <Login />;
            default:
                return <Home />;
        }
    }
    return <section>
        {renderPage(currentPage)}
    </section>
}

export default Page