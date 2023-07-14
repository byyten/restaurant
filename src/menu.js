
// import './style.css'

import onion_dog from './onion_dog.jpeg'
import onion_fries from './onion_fries.jpeg'
import onion_rings from './onion_rings.jpeg'
import fries from './fries.jpeg'
import burger from './burger.jpeg' 
import marty from './marty.png'

function component(type, classes, text = '') {
    const element = document.createElement(type);

    element.textContent = text;
    if (classes !== '') {
        element.classList.add(classes.split(' '));
    }

    return element
}
console.log('menu made it!')

console.log(component('div','contact','div.contact.text').textContent)

function menu_item(item_name, item_desc) {
    let m_item = component('div', 'menu_item')
    // let m_item_name = component('div', 'item_name', item_name)
    // let m_item_desc = component('div', 'item_desc', item_desc)
    // m_item.appendChild(m_item_name)
    // m_item.appendChild(m_item_desc)
    let m_item_img = component('img', 'item_img')
    m_item_img.src = item_name
    m_item_img.title = item_desc
    m_item_img.alt = item_desc
    m_item.appendChild(m_item_img)
    return m_item
}

export function compose_menu() {
    let menu_descs = ['onion_dog','onion_fries', 'onion_rings', 'fries', 'burger' ]
    let menu_items = [onion_dog, onion_fries, onion_rings, fries, burger ]

    let content = component('div', 'content','')
        let  menu = component('div', 'menu', '')

            let img_adam_hall = component('img', 'img_adam_hall')
            img_adam_hall.src = marty
            img_adam_hall.title = img_adam_hall.alt = 'Adam Hall of Sid\'s Diner continues the fried onion burger tradition made famous during the Great Depression (Courtesy of Adam Hall)'
            content.appendChild(img_adam_hall)

            let menu_title = component('div', 'menu_title', 'Diner')
             menu.appendChild(menu_title)

            let dine_options = component('div', 'dine_options', 'dine in (reservation recommended)')
             menu.appendChild(dine_options)
 
            dine_options = component('div', 'dine_options', 'drive thru')
             menu.appendChild(dine_options)
 
            dine_options = component('div', 'dine_options', 'private function room (booking essential)')
             menu.appendChild(dine_options)
 
            let menu_gallery = component('div', 'menu_gallery')
                let gallery_title = component('div', 'gallery_title', 'Gallery')
                let gallery_imgs = component('div', 'gallery_imgs')
                let item;
                    menu_gallery.appendChild(gallery_title)
                    menu_items.forEach((item, idx) => {
                        item = menu_item(item, menu_descs[idx])
                        gallery_imgs.appendChild(item)
                    })
                menu_gallery.appendChild(gallery_imgs)
             menu.appendChild(menu_gallery)
    content.appendChild(menu)

    return content
}

// document.body.appendChild(compose_menu())