import React from 'react';

const Square = (props) => {
  /* 
  1) Set the classes associated with the Square based on whether or not props.className is true and its value; if there were no className given to the Square then only assign the class 'square' to it 
  2) onClick of the Square run the function assigned to the Square
  3) state is assigned based on the current gameState of the Square as related to its index
  */
  const classes = props.className ? `${props.className} square` : `square`;
  return <span className={classes} onClick={props.onClick}>
      {props.state}
  </span>;
};

export default Square;
