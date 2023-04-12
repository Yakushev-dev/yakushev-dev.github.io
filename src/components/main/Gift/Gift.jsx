import React from 'react';
import css from './Gift.module.css';

export const Gift = () => {
  return (
    <div id="gift" className={css.giftContainer}>
        <div className={css.titleContainer}>
            <h1 className={css.title}>ПОДАРОК</h1>
            <div className={css.description}>
                    Если вы планируете сделать нам подарок,
                    то ваши пожелания в конвертах будут лучшими
                    подарками, которые помогут исполнить наши мечты.
            </div>
            <h3>
                А еще мы хотели бы попросить вас кое о чем особенном...
            </h3>
            <div className={css.petContainer}>
                Если хотите подарить цветы, давайте заменим их на 
                корм для животных, который мы пожертвуем в местный приют.
                Мы уверены, что этот жест будет иметь большое значение для 
                тех, кто находится в нужде, и будем благодарны за любую 
                помощь, которую вы можете предоставить.
            </div>
        </div>
        <img className={css.dogs} src="assets/dogs.jpeg" alt="dogs" />
    </div>
  )
}
