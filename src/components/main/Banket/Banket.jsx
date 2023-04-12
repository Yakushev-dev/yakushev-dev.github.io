import React from 'react';
import css from './Banket.module.css'

export const Banket = () => {
    const isSmallScreen = window.innerWidth < 1200;
    const info = {
        "Дата": "17 июня 2023 года",
        "Время": "16:00",
        "Место": `Летняя терраса отеля "Солнце"`,
        "Адрес": "Иркутск, Байкальская, 295б"
    };

    return (
        <div className={css.container}>
            {isSmallScreen ? (
            <>
                <img className={css.logo} src="assets/banket.svg" alt="banket" />
                <img className={css.img} src="assets/banket.jpeg" alt="banket" />
                <div className={css.info}>
                    <div className={css.firstTable}>
                        <div className={css.description}>
                            БАНКЕТ
                        </div>
                        {Object.keys(info).map((el) => 
                            <div className={css.el}>{el}</div>
                        )}
                    </div>
                    <div className={css.secondTable}>
                        <div className={css.description2}>
                            БАНКЕТ
                        </div>
                        {Object.values(info).map((el) => 
                            <div className={css.el}>{el}</div>
                        )}
                    </div>
                </div>
            </>
            ) : (
                <>
                    <div className={css.info}>
                        <div className={css.firstTable}>
                            <div className={css.description}>
                                БАНКЕТ
                            </div>
                            {Object.keys(info).map((el) => 
                                <div className={css.el}>{el}</div>
                            )}
                        </div>
                        <div className={css.secondTable}>
                            <div className={css.description2}>
                                БАНКЕТ
                            </div>
                            {Object.values(info).map((el) => 
                                <div className={css.el}>{el}</div>
                            )}
                        </div>
                    </div>
                    <img className={css.img} src="assets/banket.jpeg" alt="banket" />
                </>
            )}
        </div>
    )
}
