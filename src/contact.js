import static_map from './static_map_1.png'
import el_reno_66 from './el_reno_66.png'
// import './style.css'


function component(type, classes, text = '') {
    const element = document.createElement(type);

    element.textContent = text;
    if (classes !== '') {
        element.classList.add(classes.split(' '));
    }

    return element
}


console.log('contact made it!')

export  function compose_contact() {
    let content = component('div', 'content','')


    let contact = component('div', 'contact', '')

        let page_title = component('div', 'page_title', 'Contact')
    
        contact.appendChild(page_title)

        let page_body = component('div', 'page_body', '')

            let info_img = component('img', 'info_img', '')
            info_img.src = el_reno_66
            info_img.alt = "Image showing route 66 highway sign, railway caboose and RV"

        page_body.appendChild(info_img)

            let page_info  = component('div', 'page_info', 'Get in touch on:')
            let info_tel = component('div', 'info_tel', 'T: (405)-262-7757')

            let info_email = component('div', 'info_email', 'E: sidsdinerelreno@yahoo.com')
            
        page_body.appendChild(page_info)
        page_body.appendChild(info_tel)
        page_body.appendChild(info_email)

        contact.appendChild(page_body)

        let page_loc  = component('div', 'page_loc', 'Or just turn up:')
            let info_dir = component('div', 'info_dir', 'A: 300 South Choctaw Avenue, El Reno, OK 73036')
                
            let info_map = component('img', '', '')
            info_map.src = static_map
            info_map.alt = "Static map image showing location of Sid's Diner"
        
        page_loc.appendChild(info_dir)
        page_loc.appendChild(info_map)

        contact.appendChild(page_loc)
        content.appendChild(contact)

    return content
}

// document.body.appendChild(compose_contact())