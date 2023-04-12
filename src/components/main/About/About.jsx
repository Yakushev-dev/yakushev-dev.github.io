import React from 'react';
import css from './About.module.css'

export const About = () => {
  return (
    <div className={css.aboutContainer}>
        <div className={css.titleContainer}>
            <h1 className={css.title1}>МЫ ЖЕНИМСЯ</h1>
        </div>
        <div className={css.textContainer}>
            <h1 className={css.title2}>МЫ ЖЕНИМСЯ</h1>
            <p className={css.p1}>Дорогие друзья, родные и близкие!</p>
            <p className={css.p2}>
                Мы рады пригласить вас на нашу свадьбу. 
                Для нас очень важно, чтобы вы смогли разделить 
                с нами самое счастливое мгновение в нашей жизни. 
                Порадуйте нас своим присутствием:
            </p>
            <h2 className={css.date}>17 ИЮНЯ 2023 ГОДА</h2>
            <img className={css.herts} src="assets/herts.svg" alt="herts" />
            <p className={css.podpis}>С любовью, Игорь и Катя</p>
        </div>
    </div>
  )
}
