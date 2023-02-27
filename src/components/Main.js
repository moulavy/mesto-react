import React from 'react';
function Main(props) {   
   
   return ( 
<main className="content container">
   <section className="profile">
            <button
               type="button"
               className="profile__button-avatar"
               onClick={props.onEditAvatar}
            >
         <img src="#" alt="Аватар" className="profile__avatar" />
      </button>
      <div className="profile__info">
         <h1 className="profile__name">Жак-Ив Кусто</h1>
         <button aria-label="Edit" className="profile__edit-button" onClick={props.onEditProfile}></button>
         <p className="profile__description">Исследователь</p>
      </div>
            <button aria-label="Add" className="profile__add-button" onClick={props.onAddPlace}></button>
   </section>
   <section className="elements">
      <ul className="elements__list">
         <template id="elements__element">
            <li className="elements__element">
               <button className="elements__button-delete "></button>
               <img className="elements__image" />
               <h2 className="elements__title"></h2>
               <div className="elements__button-like">
                  <button aria-label="Like" className="elements__button-heart"></button>
                  <p className="elements__like-counter">8</p>
               </div>
            </li>
         </template>
      </ul>
   </section>
      </main>
   );
}

export default Main;
