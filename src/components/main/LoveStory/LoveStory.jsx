import React from 'react';
import css from './LoveStory.module.css'

export const LoveStory = () => {
    const isSmallScreen = window.innerWidth < 800;

  return (
    <div>
                <div className={css.titleContainer}>
                    <div className={css.firstImageContainer}>
                        <img className={css.loveStoryText} src="assets/loveStoryText.svg" alt="loveStoryText" />
                        <img className={css.firstImage} src="assets/LoveStory.jpeg" alt="LoveStoryImg" />
                        <div className={css.border}></div>
                    </div>
                </div>
        {isSmallScreen ? (
                <div className={css.storyContainer}>
                    <div className={css.story}>
                        <img src="assets/hert.svg" alt="hert" />
                        <h3>ИСТОРИЯ НАШЕЙ ЛЮБВИ...</h3>
                        <p>Мы встретились 5 лет назад в Горьковском парке. Была осень и шёл сильный дождь. Но он не помешал нам провести вместе этот волшебный вечер. Наша любовь вспыхнула подобно красным листьям клёна, и вместо поздней осени, в душе настала весна. И с тех пор, в каплях дождя мы всегда слышим музыку.</p>
                    </div>
                    <img className={css.storyImage} src="assets/1.jpeg" alt="storyImage" />
                </div>
        ) : (
                <div className={css.storyContainer}>
                    <img className={css.storyImage} src="assets/1.jpeg" alt="storyImage" />
                    <div className={css.story}>
                        <img src="assets/hert.svg" alt="hert" />
                        <h3>ИСТОРИЯ НАШЕЙ ЛЮБВИ...</h3>
                        <p>Мы встретились 5 лет назад в Горьковском парке. Была осень и шёл сильный дождь. Но он не помешал нам провести вместе этот волшебный вечер. Наша любовь вспыхнула подобно красным листьям клёна, и вместо поздней осени, в душе настала весна. И с тех пор, в каплях дождя мы всегда слышим музыку.</p>
                    </div>
                </div>
        )}
    </div>
  )
}
