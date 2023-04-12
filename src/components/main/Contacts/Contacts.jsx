import React from 'react';
import css from './Contacts.module.css';

export const Contacts = () => {
  return (
    <div id="contacts" className={css.container}>
        <div className={css.textContainer}>
            <h3 className={css.title}>
                МЫ БУДЕМ РАДЫ ВИДЕТЬ ВАС НА НАШЕЙ СВАДЬБЕ!
            </h3>
            <p className={css.description}>
                И надеемся, что этот волшебный день надолго останется 
                в памяти не только у нас, но и у вас.
            </p>
            <img className={css.heart} src="assets/hert.svg" alt="hert" />
            <h3 className={css.contactsTitle}>КОНТАКТЫ</h3>
        </div>
        <div className={css.contactContainer}>
            <div className={css.sayMe}>
                <p>Пожалуйста, сообщите нам о своем присутствии и свои пожелания по напиткам до 5 мая 2023 года.</p>
            </div>
            <div className={css.contacts}>
                <div>
                    <p> Катя &nbsp; 
                        <a href="https://t.me/v_kat7" target="_blank" rel="noreferrer">
                            <img src="assets/tg.png" alt="tg" />
                        </a>
                        &nbsp;
                        <a href="https://wa.me/79646544445" target="_blank" rel="noreferrer">
                            <img src="assets/wa.png" alt="wa" />
                        </a>
                    </p>
                </div>
                <div>
                    <p>Игорь &nbsp;
                        <a href="https://t.me/Igoryan_ya" target="_blank" rel="noreferrer">
                            <img src="assets/tg.png" alt="tg" />
                        </a>
                    </p>
                </div>
                <div>
                    <p> Приют &nbsp; 
                        <a href="https://mv38.ru/need" target="_blank" rel="noreferrer">
                            <img src="assets/dog.png" alt="inst" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
