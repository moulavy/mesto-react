import logo from './logo.svg';
import './index.css';

function App() {
  return (
    
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mesto</title>

      </head>
      <body class="page">
        <header class="header container">
          <img src="<%=require('./images/logo.svg')%>" alt="Логотип" class="header__logo" />
        </header>
        <main class="content container">
          <section class="profile">
            <button type="button" class="profile__button-avatar">
              <img src="#" alt="Аватар" class="profile__avatar" />
            </button>
            <div class="profile__info">
              <h1 class="profile__name"></h1>
              <button aria-label="Edit" class="profile__edit-button"></button>
              <p class="profile__description"></p>
            </div>
            <button aria-label="Add" class="profile__add-button"></button>
          </section>
          <section class="elements">
            <ul class="elements__list">
              <template id="elements__element">
                <li class="elements__element">
                  <button class="elements__button-delete "></button>
                  <img class="elements__image" />
                  <h2 class="elements__title"></h2>
                  <div class="elements__button-like">
                    <button aria-label="Like" class="elements__button-heart"></button>
                    <p class="elements__like-counter">8</p>
                  </div>
                </li>
              </template>
            </ul>
          </section>
        </main>
        <section class="popup-edit popup">
          <form
            novalidate
            class="popup__form popup__container popup-edit__container"
          >
            <button
              aria-label="Close"
              type="button"
              class="popup__button-close popup-edit__button-close"
            ></button>
            <h2 class="popup__title">Редактировать профиль</h2>
            <input
              placeholder="Имя"
              name="name"
              id="name-input"
              type="text"
              minlength="2"
              maxlength="40"
              required
              class="popup__input popup__input_value_name"
            />
            <span class="name-input-error popup__error popup__error_visible"></span>
            <input
              placeholder="О себе"
              id="description-input"
              name="about"
              minlength="2"
              maxlength="200"
              required
              type="text"
              class="popup__input popup__input_value_description"
            />
            <span class="description-input-error popup__error popup__error_visible"></span>
            <button type="submit" class="popup__button popup__button-save">
              Сохранить
            </button>
          </form>
        </section>
        <section class="popup-add popup">
          <form
            novalidate
            class="popup__form popup__container popup-add__container"
          >
            <button
              aria-label="Close"
              type="reset"
              class="popup__button-close popup-add__button-close"
            ></button>
            <h2 class="popup__title">Новое место</h2>
            <input
              id="name-img-input"
              type="text"
              minlength="2"
              maxlength="30"
              name="name"
              required
              placeholder="Название"
              class="popup__input popup__input_value_name-img"
            />
            <span class="popup__error popup__error_visible name-img-input-error"></span>
            <input
              id="link-img-input"
              type="url"
              required
              name="link"
              placeholder="Ссылка на картинку"
              class="popup__input popup__input_value_link-img"
            />
            <span class="popup__error popup__error_visible link-img-input-error"></span>

            <button type="submit" class="popup__button popup__button-add">
              Создать
            </button>
          </form>
        </section>
        <section class="popup-img popup">
          <div class="popup-img__container">
            <button
              aria-label="Close"
              type="button"
              class="popup__button-close popup-img__button-close"
            ></button>
            <img src="#" alt="" class="popup-img__photo" />
            <p class="popup-img__subtitle"></p>
          </div>
        </section>
        <section class="popup-confirm popup">
          <form
            novalidate
            class="popup__form popup__container popup-confirm__container"
          >
            <button
              aria-label="Close"
              type="reset"
              class="popup__button-close popup-confirm__button-close"
            ></button>
            <h2 class="popup__title">Вы уверены?</h2>

            <button type="submit" class="popup__button popup__button-confirm">
              Да
            </button>
          </form>
        </section>
        <section class="popup-avatar popup">
          <form
            novalidate
            class="popup__form popup__container popup-avatar__container"
          >
            <button
              aria-label="Close"
              type="button"
              class="popup__button-close popup-avatar__button-close"
            ></button>
            <h2 class="popup__title">Обновить аватар</h2>
            <input
              placeholder="Ссылка на изображение"
              id="avatar-input"
              name="avatar"
              required
              type="url"
              class="popup__input popup__input_value_avatar"
            />
            <span class="avatar-input-error popup__error popup__error_visible"></span>
            <button type="submit" class="popup__button popup__button-save popup__save-avatar">
              Сохранить
            </button>
          </form>
        </section>
        <footer class="footer container">
          <p class="footer__text">© 2020 Mesto Russia</p>
        </footer>

      </body>
    </html>

  );
}

export default App;
