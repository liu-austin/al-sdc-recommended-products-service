import React from "react";
// import styled from 'styled-components';
import FullStar from "./FullStar.jsx";
import HalfStar from "./HalfStar.jsx";
import EmptyStar from "./EmptyStar.jsx";

const round = (x, precision) => {
  var y = +x + (precision === undefined ? 0.5 : precision / 2);
  return y - (y % (precision === undefined ? 1 : +precision));
};

const ratingHandler = unroundedRate => {
  var rating = round(unroundedRate, 0.5);
  // console.log(rating)

  var starArray = [];
  var counter = 0;
  while (counter < 5) {
    if (rating - 1 >= 0) {
      starArray.push(<FullStar />);
      rating--;
    } else if (rating === 0.5) {
      starArray.push(<HalfStar />);
      rating -= 0.5;
    } else if (rating === 0) {
      starArray.push(<EmptyStar />);
    }
    // console.log(counter)
    counter++;
  }
  return starArray;
};

const AddBagModalListEntry = props => {
  // console.log(props.data.itemimage);
  return (
    <div
      className="as-styledLikeItem"
      style={{
        padding: "20px",
        transition: "transform .2s" /* Animation */,
        margin: "0 auto",
        cursor: "pointer"
      }}
    >
      <img
        src={props.data.itemimage}
        className="as-productImage"
        height="175"
        width="175"
      />
      <div className="as-productName">{props.data.itemname}</div>
      <div className="as-description">{props.data.description}</div>
      <div className="as-description">{props.data.typesize}</div>
      <div className="as-price">${props.data.price}</div>
      <span className="as-starRatings">
        {ratingHandler(props.data.rating)} &nbsp; {props.data.rating} &nbsp; (
        {props.data.numberRatings}){" "}
      </span>
    </div>
  );
};

export default AddBagModalListEntry;
