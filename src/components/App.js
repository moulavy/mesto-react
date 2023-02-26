import '../index.css';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() { 

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
        />
        <section className="popup-edit popup">
          <form
            novalidate
            className="popup__form popup__container popup-edit__container"
          >
            <button
              aria-label="Close"
              type="button"
              className="popup__button-close popup-edit__button-close"
            ></button>
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button type="submit" className="popup__button popup__button-save">
              Сохранить
            </button>
          </form>
        </section>
        <section className="popup-add popup">
          <form
            novalidate
            className="popup__form popup__container popup-add__container"
          >
            <button
              aria-label="Close"
              type="reset"
              className="popup__button-close popup-add__button-close"
            ></button>
            <h2 className="popup__title">Новое место</h2>
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

            <button type="submit" className="popup__button popup__button-add">
              Создать
            </button>
          </form>
        </section>
        <section className="popup-img popup">
          <div className="popup-img__container">
            <button
              aria-label="Close"
              type="button"
              className="popup__button-close popup-img__button-close"
            ></button>
            <img src="#" alt="" className="popup-img__photo" />
            <p className="popup-img__subtitle"></p>
          </div>
        </section>
        <section className="popup-confirm popup">
          <form
            novalidate
            className="popup__form popup__container popup-confirm__container"
          >
            <button
              aria-label="Close"
              type="reset"
              className="popup__button-close popup-confirm__button-close"
            ></button>
            <h2 className="popup__title">Вы уверены?</h2>

            <button type="submit" className="popup__button popup__button-confirm">
              Да
            </button>
          </form>
        </section>
        <section className="popup-avatar popup">
          <form
            novalidate
            className="popup__form popup__container popup-avatar__container"
          >
            <button
              aria-label="Close"
              type="button"
              className="popup__button-close popup-avatar__button-close"
            ></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              placeholder="Ссылка на изображение"
              id="avatar-input"
              name="avatar"
              required
              type="url"
              className="popup__input popup__input_value_avatar"
            />
            <span className="avatar-input-error popup__error popup__error_visible"></span>
            <button type="submit" className="popup__button popup__button-save popup__save-avatar">
              Сохранить
            </button>
          </form>
        </section>
        <Footer/>

      </body>
    </html>

  );
}

export default App;
