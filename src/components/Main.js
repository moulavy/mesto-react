import React, { useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card.js'
function Main(props) {   
   const [userName, setUserName] = React.useState('');
   const [userDescription, setUserDescription] = React.useState('');
   const [userAvatar, setUserAvatar] = React.useState('');
   const [cards, setCards] = React.useState([]);

   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
         .then(([resUser, resCards]) => {
            setUserName(resUser.name);
            setUserDescription(resUser.about);
            setUserAvatar(resUser.avatar);
            setCards(resCards);
         })
         .catch((err) => {
            console.log(err);
         });
   },[])
   return ( 
<main className="content container">
   <section className="profile">
            <button
               type="button"
               className="profile__button-avatar"
               onClick={props.onEditAvatar}
            >
               <img src={userAvatar} alt="Аватар" className="profile__avatar"  />
      </button>
      <div className="profile__info">
               <h1 className="profile__name">{ userName}</h1>
         <button aria-label="Edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
         <p className="profile__description">{userDescription}</p>
      </div>
            <button aria-label="Add" className="profile__add-button" onClick={props.onAddPlace}></button>
   </section>
   <section className="elements">
      <ul className="elements__list">
               {cards.map((card) =>
                  <Card
                     onCardClick={props.onCardClick}
                     card={card}
                  />
               )}
      </ul>
   </section>
      </main>
   );
}

export default Main;
