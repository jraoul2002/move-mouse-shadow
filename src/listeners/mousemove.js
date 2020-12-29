'use strict';

import { shadow } from '../handlers/shadow.js';



const hero = document.querySelector('.hero');
//const text = hero.querySelector('h1');
//const walk = 500; // 500px

hero.addEventListener('mousemove', shadow);