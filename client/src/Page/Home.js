import React from 'react';
import './style.css';
import CategoryItem from './CategoryItem'; // Import the CategoryItem component

const Home = () => {
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
          <li>
            <CategoryItem category="Breakfast" imageSrc="./images/breakfast.jpeg" />
          </li>
          <li>
            <CategoryItem category="Lunch" imageSrc="./images/lunch.jpg" />
          </li>
          <li>
            <CategoryItem category="Dinner" imageSrc="./images/dinner.jpg" />
          </li>
          <li>
            <CategoryItem category="Snacks" imageSrc="./images/snack.jpg" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
