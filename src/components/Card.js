import React from 'react';
function Card(props) {
   function handleClick() {
      props.onCardClick(props.card);
   }  
   return (
      <li class="elements__element" key={props.card._id}>
         <button class="elements__button-delete "></button>
         <img class="elements__image" src={props.card.link} onClick={handleClick} />
         <h2 class="elements__title">{props.card.name}</h2>
         <div class="elements__button-like">
            <button aria-label="Like" class="elements__button-heart"></button>
            <p class="elements__like-counter">{props.card.likes.length}</p>
         </div>
      </li>
   )
}
export default Card;