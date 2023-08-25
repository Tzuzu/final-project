import React from 'react';
import Nav from '../Nav';
// import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
    return <header>
        <div>
            <h1>Title</h1>
            <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </header>
}

export default Header;