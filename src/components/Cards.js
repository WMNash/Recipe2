import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
// import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check it out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="image/9.jpg"
              text="Explore the wonderous asian cuisine"
              label="Oriental"
              path="/services"
            />
            <CardItem
              src="image/2.jpg"
              text="Learn various types of spices and its uses"
              label="Spices"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="image/5.jpg"
              text="Discover new herbs "
              label="Herbs"
              path="/services"
            />
            <CardItem
              src="image/4.jpg"
              text="Experience types of cooking you've never seen before"
              label="Cooking"
              path="/products"
            />
            <CardItem
              src="image/8.jpg"
              text="Learn the history of the cultural cuisine"
              label="Culture"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel " src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

// export default CardItem;
export default Cards;
