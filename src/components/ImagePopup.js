import React from 'react';
function ImagePopup() {
   return (
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
   )
}
export default ImagePopup;
