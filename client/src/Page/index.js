import React from 'react'
import Login from './Login'
import Recipes from './Recipes'
import Cookbook from './Cookbook'
import Home from './Home'
// import './style.css'

const Page = ({currentPage}) => {
    const renderPage = (page) => {
        switch (page) {
            case 'cookbook':
                return <Cookbook />;
            case 'login':
                return <Login />;
            case 'recipes':
                return <Recipes />;
            default:
                return <Home />;
        }
    }
    return <section>
        {renderPage(currentPage)}
    </section>
}

export default Page