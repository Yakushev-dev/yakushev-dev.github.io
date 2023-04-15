import React from 'react';
import css from './LoveStory.module.css'

export const LoveStory = () => {
    const isSmallScreen = window.innerWidth < 800;

  return (
    <div>
                <div className={css.titleContainer}>
                    <div className={css.firstImageContainer}>
                        <img id='loveStory' className={css.loveStoryText} src="assets/loveStoryText.svg" alt="loveStoryText" />
                        <img className={css.firstImage} src="assets/loveStory.jpeg" alt="LoveStoryImg" />
                        <div className={css.border}></div>
                    </div>
                </div>
        {isSmallScreen ? (
                <div className={css.storyContainer}>
                    <div className={css.story}>
                        <img src="assets/hert.svg" alt="hert" />
                        <h3>ИСТОРИЯ НАШЕЙ ЛЮБВИ...</h3>
                        <p>Мы познакомились, когда ей стало 18. Прямо в день рождения. 
                            И я бы хотел сказать, что это была любовь с первого взгляда, 
                            но увы, это было просто знакомство в кругу общих друзей. 
                            Спустя 1,5 года мы встретились на дне рождения у подруги. 
                            Получается, это была любовь со второго взгляда. Жаль, что 
                            не взаимная. Больше полугода я стучался в Катино сердечко и, 
                            наконец, по весне оно растаяло. Поездка к бабушке в деревню в 2018 году переплела 
                            наши узы. С тех пор мы решили жить вместе и больше никогда 
                            не отпускать друг друга.</p>
                    </div>
                    <img className={css.storyImage} src="assets/1.jpeg" alt="storyImage" />
                </div>
        ) : (
                <div className={css.storyContainer}>
                    <img className={css.storyImage} src="assets/1.jpeg" alt="storyImage" />
                    <div className={css.story}>
                        <img src="assets/hert.svg" alt="hert" />
                        <h3>ИСТОРИЯ НАШЕЙ ЛЮБВИ...</h3>
                        <p>Мы познакомились, когда ей стало 18. Прямо в день рождения. 
                            И я бы хотел сказать, что это была любовь с первого взгляда, 
                            но увы, это было просто знакомство в кругу общих друзей. 
                            Спустя 1,5 года мы встретились на дне рождения у подруги. 
                            Получается, это была любовь со второго взгляда. Жаль, что 
                            не взаимная. Больше полугода я стучался в Катино сердечко и, 
                            наконец, по весне оно растаяло. Поездка к бабушке в деревню в 2018 году переплела 
                            наши узы. С тех пор мы решили жить вместе и больше никогда 
                            не отпускать друг друга.</p>
                    </div>
                </div>
        )}
    </div>
  )
}
