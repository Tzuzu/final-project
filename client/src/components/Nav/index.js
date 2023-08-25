import React from 'react';
// import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage }) => {
    return <nav>
        {pages.map((page) => (
            <a href="/#" key={page} className={`${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}>
                {(page)}
            </a>
        ))}
    </nav>
}

export default Nav