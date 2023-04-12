import React from 'react';
import css from './DressCode.module.css';

export const DressCode = () => {
    const isSmallScreen = window.innerWidth < 800;

  return (
    <div id="dressCode" className={css.wrapper}>  
        <div className={css.container}>
            {isSmallScreen ? (
                <>
                    <h3 className={css.description}>Мы знаем какая это боль шить себе платье на один вечер и никого не просим этого делать. Но на всякий случай сообщаем, что при подготовке к торжеству будем придерживаться этих тонов.</h3>
                    <img className={css.img} src="assets/color.jpeg" alt="color" />
                </>
            ) : (
                <>
                    <img className={css.img} src="assets/color.jpeg" alt="color" />
                    <h3 className={css.description}>Мы знаем какая это боль шить себе платье на один вечер и никого не просим этого делать. Но на всякий случай сообщаем, что при подготовке к торжеству будем придерживаться этих тонов.</h3>
                </>
            )}
            <img className={css.themeImage} src="assets/dressCode.svg" alt="dresscode" />
        </div>
    </div>
  )
}
