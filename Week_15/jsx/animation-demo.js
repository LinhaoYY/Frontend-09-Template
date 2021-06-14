import {Timeline, Animation} from "./animation.js"
import {ease, easeIn, easeOut, easeInOut} from "./linear.js"

let t = new Timeline();
t.add(new Animation(document.querySelector('#el').style, 'transform', 0 , 500, 2000, 0, ease, v => `translateX(${v}px)`));
document.querySelector('#el2').style.transition = 'transform ease 2s';
document.querySelector('#el2').style.transform = 'translateX(500px)';
t.start();
document.querySelector('#pause-btn').addEventListener('click', () => t.pause())
document.querySelector('#resume-btn').addEventListener('click', () => t.resume())
