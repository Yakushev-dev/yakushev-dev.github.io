import React from 'react';
import { About } from './About/About';
import { Banket } from './Banket/Banket';
import { DressCode } from './DressCode/DressCode';
import { Contacts } from './Contacts/Contacts';
import { Gift } from './Gift/Gift';
import { LoveStory } from './LoveStory/LoveStory';
import css from './Main.module.css';

export default function Main() {
  return (
    <div>
        <div className={css.mainImage}>
            <img src="assets/title.jpeg" alt="заставка" />
        </div>
        <About />
        <LoveStory />
        <Banket />
        <DressCode />
        <Gift />
        <Contacts />
    </div>
  )
}
