import React from 'react';
function PopupWithForm() {
   return (
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
   )
}