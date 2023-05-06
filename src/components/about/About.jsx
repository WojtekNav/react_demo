import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about__container">
      <div className="about__about">
        <div className="about__about-heading">
          <h1>Biz Kimiz</h1>
          <p><a href="softito.com.tr">Learn more</a></p>
        </div>
        <div className="about__about-container">
          <div className="about__features-container__feature">
            <img src="https://via.placeholder.com/150" alt="Feature 1"/>
            <div className="about__features-container_feature-text">
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tincidunt nulla, vel vulputate metus. Nullam eleifend mi nec quam pharetra tristique. Donec non mi ligula. In maximus vestibulum nulla, sit amet venenatis eros feugiat vel.</p>
            </div>
          </div>
          <div className="about__features-container__feature">
            <img src="https://via.placeholder.com/150" alt="Feature 2"/>
            <div className="about__features-container_feature-text">
              <h3>Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tincidunt nulla, vel vulputate metus. Nullam eleifend mi nec quam pharetra tristique. Donec non mi ligula. In maximus vestibulum nulla, sit amet venenatis eros feugiat vel.</p>
            </div>
          </div>
          <div className="about__features-container__feature">
            <img src="https://via.placeholder.com/150" alt="Feature 3"/>
            <div className="about__features-container_feature-text">
              <h3>Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tincidunt nulla, vel vulputate metus. Nullam eleifend mi nec quam pharetra tristique. Donec non mi ligula. In maximus vestibulum nulla, sit amet venenatis eros feugiat vel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
