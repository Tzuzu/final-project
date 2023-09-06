import React from 'react';
import './style.css';
import CategoryItem from './CategoryItem'; // Import the CategoryItem component

const Home = ({setCurrentPage}) => {
  return (
    <>
      <div>
        <p>
          Welcome to everyone's cookbook! You may browse the site to find
          recipes you like, otherwise please check out your cookbook page to
          create and manage your own!
        </p>

        <h2> Recipes </h2>
        <h3> What are you in the mood for? </h3>

        <ul className="category-list">
          {/* Render each category as a CategoryItem */}
          <li key="Breakfast">
            <CategoryItem category="breakfast" imageSrc="./images/breakfast.jpeg" setCurrentPage={setCurrentPage} />
          </li>
          <li key="Lunch">
            <CategoryItem category="lunch" imageSrc="./images/lunch.jpg" setCurrentPage={setCurrentPage}  />
          </li>
          <li key="Dinner">
            <CategoryItem category="dinner" imageSrc="./images/dinner.jpg" setCurrentPage={setCurrentPage}  />
          </li>
          <li key="Snacks">
            <CategoryItem category="snacks" imageSrc="./images/snack.jpg" setCurrentPage={setCurrentPage}  />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
