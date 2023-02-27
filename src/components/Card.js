import React from 'react';
function Card(props) {
   function handleClick() {
      props.onCardClick(props.card);
   }  
   return (
      <li className="elements__element" >
         <button className="elements__button-delete "></button>
         <img className="elements__image" src={props.card.link} onClick={handleClick} />
         <h2 className="elements__title">{props.card.name}</h2>
         <div className="elements__button-like">
            <button aria-label="Like" className="elements__button-heart"></button>
            <p className="elements__like-counter">{props.card.likes.length}</p>
         </div>
      </li>
   )
}
export default Card;