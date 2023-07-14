
import './OpenSans.ttf';
import burger from './depression_burger_1.png';
import './style.css'
import { compose_contact } from './contact.js' 
import { compose_menu } from './menu.js'

console.log('made it!')

function component(type, classes, text = '') {
    const element = document.createElement(type);

    element.textContent = text;
    if (classes !== '') {
        element.classList.add(classes.split(' '));
    }

    return element
}

function compose_index() {
    let content = component('div', 'content')
    content.title = "This is a poor reinterpretation of a real restaurant website, " +
        "apologies to the real Sid's Cafe, the original home of the 'Depression burger'. " +
        "Source material for this assignment was shamelessly taken from the real Sid's Diner web site and an " +
        "article by the BBC https://www.bbc.com/travel/article/20230626-the-depression-burger-of-route-66 by Heide Brandes " + 
        "which was the basis for this reinterpretation. Little attention has been paid to layout since the purpose of this " + 
        "assignment is learning/implementing Webpack in the development workflow and SPA construction"

    let restaurant = component('div', 'restaurant', "Sid's Diner")
    content.appendChild(restaurant)

    let _container = component('div', '_container')
        let hero = component('div', 'hero')
        let hero_img = new Image(); 
            hero_img.alt = 'picture of a depression burger from Sid Diner on route 66';
            hero_img.src = burger
        hero.appendChild(hero_img)
        let subhero = component('div', 'subhero', "Open 24 x 7, El Reno, km 66, Route 66: Food to keep yer mota runnin' ")

        let text = "Born from poverty but made famous by love, the fried onion burger has fans flocking to El Reno in Oklahoma. "+
            "In El Reno, a small industrial town just west of Oklahoma City on Oklahoma's portion of Route 66, Sid's Diner "+
            "is hopping during lunch. With the sharp smell of crisping onions and burger grease in the air, most of the "+
            "diners in the joint are munching down on a sandwich that was born out of poverty but made famous by love."+
            "Adam, the second-generation owner at Sid's Diner, taking over from his father Marty Hall, is working the "+
            "flat iron grill. He presses the patty of beef mince made juicy with a mess of sweet onion slivers onto the "+
            "searing heat. As meat cooks to a nice crispy crust, he flips the burger onion-side down, letting the grease "+
            "and the grill cast the magic of caramelisation."+
            "Marty figures he's flipped five million burgers in his life. He's made a living out of cooking the famous "+
            "Oklahoma fried onion burger, a thin patty of beef filled with grilled, caramelised onion served on a flat-"+
            "grill crispy bun. He's even designed his own 'onion burger spatula', handmade from a masonry trowel."+
            "He's lost a wife because of flipping burgers but gained another one because of it. His own three children – "+
            "Adam now taking the reins of the diner – were born into the smell of onion burgers and have diner blood "+
            "running through their veins. And it's all thanks to the Oklahoma fried onion burger, which rose from the "+
            "scarcity of the Great Depression, thus earning the quaint nickname of the 'Depression Burger'."+
            "During America's Great Depression in the 1930s, hamburger meat was expensive. In the small community of "+
            "El Reno, a dreamer named Ross Davis and his father opened the Hamburger Inn, scoring a prime location along "+
            "the brand-new famed Route 66 highway right as the economy shattered."
        let quality = component('div', 'quality', text)

        _container.appendChild(hero)
        _container.appendChild(subhero)    
        _container.appendChild(quality)
        
        content.appendChild(_container)
    return content;
}

let container
let banner
let buttons
let page_content
let content

function page_setup() {
  container = document.body.querySelector('.container');
  banner = component('div', 'banner')
    banner.appendChild(component('button', 'btn_home', 'home'))
    banner.appendChild(component('button', 'btn_menu', 'menu'))
    banner.appendChild(component('button', 'btn_contact', 'contact'))

  container.appendChild(banner)

  page_content = component('div', 'page_content')
  container.appendChild(page_content)
  
  content = container.querySelector('.page_content')
  
  buttons = container.querySelectorAll('button');
  
  buttons[0].addEventListener('click', (evt) => {
    content.innerHTML = '' // remove();
    content.appendChild(compose_index())
  })
  buttons[1].addEventListener('click', (evt) => {
    content.innerHTML = '' // remove();
    content.appendChild(compose_menu())
  })
  buttons[2].addEventListener('click', (evt) => {
    content.innerHTML = '' // remove();
    content.appendChild(compose_contact())
  })  
}

page_setup()
buttons[0].click()
// content.appendChild(compose_index())

