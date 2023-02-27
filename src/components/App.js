import '../index.css';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() { 
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);

  }
  return (    
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mesto</title>
      </head>
      <body className="page">
        <Header/>
        <Main    
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name='edit'
          title='Редактировать профиль'
          textButton='Сохранить'
          button='save'
          children={
            <>
            <input
              placeholder="Имя"
              name="name"
              id="name-input"
              type="text"
              minlength="2"
              maxlength="40"
              required
              className="popup__input popup__input_value_name"
            />
            <span className="name-input-error popup__error popup__error_visible"></span>
            <input
              placeholder="О себе"
              id="description-input"
              name="about"
              minlength="2"
              maxlength="200"
              required
              type="text"
              className="popup__input popup__input_value_description"
            />
            <span className="description-input-error popup__error popup__error_visible"></span>
          </>
          }
        />
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
                minlength="2"
                maxlength="30"
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
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          name='avatar'
          title='Обновить аватар'
          textButton='Сохранить'
          button='save'
          children={
            <>
              <input
                placeholder="Ссылка на изображение"
                id="avatar-input"
                name="avatar"
                required
                type="url"
                className="popup__input popup__input_value_avatar"
              />
              <span className="avatar-input-error popup__error popup__error_visible"></span>
            </>
          }
        />           
        <Footer/>
      </body>
    </html>

  );
}

export default App;
