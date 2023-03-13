import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
function Card(props) {

   const currentUser = React.useContext(CurrentUserContext);

   // Определяем, являемся ли мы владельцем текущей карточки
   const isOwn = props.card.owner._id === currentUser._id;

   const isLiked = props.card.likes.some(i => i._id === currentUser._id);  
   
   const cardLikeButtonClassName = (
      `elements__button-heart ${isLiked && 'elements__button-heart_active'}`
   );; 

   function handleClick() {
      props.onCardClick(props.card);
   }  
   return (
      <li className="elements__element" >
         {isOwn && <button className="elements__button-delete " onClick={handleDeleteClick} />}          
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