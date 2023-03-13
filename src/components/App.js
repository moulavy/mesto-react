import '../index.css';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() { 

  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(),api.getInitialCards()])
      .then(([resUser,resCards])=> {
        setCurrentUser(resUser);
        setCards(resCards);        
      })
      .catch((err) => {
        console.log(err);
      });
    
  },[])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) =>  card._id !== item._id );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);

  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.addLike(card._id)
        .then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else if (isLiked) {
      api.deleteLike(card._id)
        .then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })      
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })  
  }

  return (        
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main    
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name='add'
          title='Новое место'
          textButton='Создать'
          button='add'
          children={
            <>
              <input
                id="name-img-input"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                required
                placeholder="Название"
                className="popup__input popup__input_value_name-img"
              />
              <span className="popup__error popup__error_visible name-img-input-error"></span>
              <input
                id="link-img-input"
                type="url"
                required
                name="link"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_value_link-img"
              />
              <span className="popup__error popup__error_visible link-img-input-error"></span>
            </>
          }
        />
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups } />
        <PopupWithForm
          
          name='confirm'
          title='Вы уверены?'
          textButton='Да'
          button='confirm'
        />  
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        
        <Footer />
      </CurrentUserContext.Provider>
      </div>


  );
}

export default App;
