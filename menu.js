"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compose_menu: () => (/* binding */ compose_menu)
/* harmony export */ });
/* harmony import */ var _onion_dog_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onion_dog.jpeg */ "./src/onion_dog.jpeg");
/* harmony import */ var _onion_fries_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onion_fries.jpeg */ "./src/onion_fries.jpeg");
/* harmony import */ var _onion_rings_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onion_rings.jpeg */ "./src/onion_rings.jpeg");
/* harmony import */ var _fries_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fries.jpeg */ "./src/fries.jpeg");
/* harmony import */ var _burger_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burger.jpeg */ "./src/burger.jpeg");
/* harmony import */ var _marty_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marty.png */ "./src/marty.png");

// import './style.css'





 


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

function compose_menu() {
    let menu_descs = ['onion_dog','onion_fries', 'onion_rings', 'fries', 'burger' ]
    let menu_items = [_onion_dog_jpeg__WEBPACK_IMPORTED_MODULE_0__, _onion_fries_jpeg__WEBPACK_IMPORTED_MODULE_1__, _onion_rings_jpeg__WEBPACK_IMPORTED_MODULE_2__, _fries_jpeg__WEBPACK_IMPORTED_MODULE_3__, _burger_jpeg__WEBPACK_IMPORTED_MODULE_4__ ]

    let content = component('div', 'content','')
        let  menu = component('div', 'menu', '')

            let img_adam_hall = component('img', 'img_adam_hall')
            img_adam_hall.src = _marty_png__WEBPACK_IMPORTED_MODULE_5__
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

/***/ }),

/***/ "./src/burger.jpeg":
/*!*************************!*\
  !*** ./src/burger.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb883b6e3c0e90b57112.jpeg";

/***/ }),

/***/ "./src/fries.jpeg":
/*!************************!*\
  !*** ./src/fries.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "476a68f55311a6333f56.jpeg";

/***/ }),

/***/ "./src/marty.png":
/*!***********************!*\
  !*** ./src/marty.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98fe0d71657207aec038.png";

/***/ }),

/***/ "./src/onion_dog.jpeg":
/*!****************************!*\
  !*** ./src/onion_dog.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11bd0d90a345e430ca4c.jpeg";

/***/ }),

/***/ "./src/onion_fries.jpeg":
/*!******************************!*\
  !*** ./src/onion_fries.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f74ed848dc553b2259bd.jpeg";

/***/ }),

/***/ "./src/onion_rings.jpeg":
/*!******************************!*\
  !*** ./src/onion_rings.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fcef9997bedd094b3b5.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUV3QztBQUNJO0FBQ0E7QUFDWjtBQUNFO0FBQ0g7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0IsNENBQVMsRUFBRSw4Q0FBVyxFQUFFLDhDQUFXLEVBQUUsd0NBQUssRUFBRSx5Q0FBTTs7QUFFeEU7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyx1Q0FBSztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmltcG9ydCBvbmlvbl9kb2cgZnJvbSAnLi9vbmlvbl9kb2cuanBlZydcbmltcG9ydCBvbmlvbl9mcmllcyBmcm9tICcuL29uaW9uX2ZyaWVzLmpwZWcnXG5pbXBvcnQgb25pb25fcmluZ3MgZnJvbSAnLi9vbmlvbl9yaW5ncy5qcGVnJ1xuaW1wb3J0IGZyaWVzIGZyb20gJy4vZnJpZXMuanBlZydcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9idXJnZXIuanBlZycgXG5pbXBvcnQgbWFydHkgZnJvbSAnLi9tYXJ0eS5wbmcnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCh0eXBlLCBjbGFzc2VzLCB0ZXh0ID0gJycpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChjbGFzc2VzICE9PSAnJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5zcGxpdCgnICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudFxufVxuY29uc29sZS5sb2coJ21lbnUgbWFkZSBpdCEnKVxuXG5jb25zb2xlLmxvZyhjb21wb25lbnQoJ2RpdicsJ2NvbnRhY3QnLCdkaXYuY29udGFjdC50ZXh0JykudGV4dENvbnRlbnQpXG5cbmZ1bmN0aW9uIG1lbnVfaXRlbShpdGVtX25hbWUsIGl0ZW1fZGVzYykge1xuICAgIGxldCBtX2l0ZW0gPSBjb21wb25lbnQoJ2RpdicsICdtZW51X2l0ZW0nKVxuICAgIC8vIGxldCBtX2l0ZW1fbmFtZSA9IGNvbXBvbmVudCgnZGl2JywgJ2l0ZW1fbmFtZScsIGl0ZW1fbmFtZSlcbiAgICAvLyBsZXQgbV9pdGVtX2Rlc2MgPSBjb21wb25lbnQoJ2RpdicsICdpdGVtX2Rlc2MnLCBpdGVtX2Rlc2MpXG4gICAgLy8gbV9pdGVtLmFwcGVuZENoaWxkKG1faXRlbV9uYW1lKVxuICAgIC8vIG1faXRlbS5hcHBlbmRDaGlsZChtX2l0ZW1fZGVzYylcbiAgICBsZXQgbV9pdGVtX2ltZyA9IGNvbXBvbmVudCgnaW1nJywgJ2l0ZW1faW1nJylcbiAgICBtX2l0ZW1faW1nLnNyYyA9IGl0ZW1fbmFtZVxuICAgIG1faXRlbV9pbWcudGl0bGUgPSBpdGVtX2Rlc2NcbiAgICBtX2l0ZW1faW1nLmFsdCA9IGl0ZW1fZGVzY1xuICAgIG1faXRlbS5hcHBlbmRDaGlsZChtX2l0ZW1faW1nKVxuICAgIHJldHVybiBtX2l0ZW1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VfbWVudSgpIHtcbiAgICBsZXQgbWVudV9kZXNjcyA9IFsnb25pb25fZG9nJywnb25pb25fZnJpZXMnLCAnb25pb25fcmluZ3MnLCAnZnJpZXMnLCAnYnVyZ2VyJyBdXG4gICAgbGV0IG1lbnVfaXRlbXMgPSBbb25pb25fZG9nLCBvbmlvbl9mcmllcywgb25pb25fcmluZ3MsIGZyaWVzLCBidXJnZXIgXVxuXG4gICAgbGV0IGNvbnRlbnQgPSBjb21wb25lbnQoJ2RpdicsICdjb250ZW50JywnJylcbiAgICAgICAgbGV0ICBtZW51ID0gY29tcG9uZW50KCdkaXYnLCAnbWVudScsICcnKVxuXG4gICAgICAgICAgICBsZXQgaW1nX2FkYW1faGFsbCA9IGNvbXBvbmVudCgnaW1nJywgJ2ltZ19hZGFtX2hhbGwnKVxuICAgICAgICAgICAgaW1nX2FkYW1faGFsbC5zcmMgPSBtYXJ0eVxuICAgICAgICAgICAgaW1nX2FkYW1faGFsbC50aXRsZSA9IGltZ19hZGFtX2hhbGwuYWx0ID0gJ0FkYW0gSGFsbCBvZiBTaWRcXCdzIERpbmVyIGNvbnRpbnVlcyB0aGUgZnJpZWQgb25pb24gYnVyZ2VyIHRyYWRpdGlvbiBtYWRlIGZhbW91cyBkdXJpbmcgdGhlIEdyZWF0IERlcHJlc3Npb24gKENvdXJ0ZXN5IG9mIEFkYW0gSGFsbCknXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZ19hZGFtX2hhbGwpXG5cbiAgICAgICAgICAgIGxldCBtZW51X3RpdGxlID0gY29tcG9uZW50KCdkaXYnLCAnbWVudV90aXRsZScsICdEaW5lcicpXG4gICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51X3RpdGxlKVxuXG4gICAgICAgICAgICBsZXQgZGluZV9vcHRpb25zID0gY29tcG9uZW50KCdkaXYnLCAnZGluZV9vcHRpb25zJywgJ2RpbmUgaW4gKHJlc2VydmF0aW9uIHJlY29tbWVuZGVkKScpXG4gICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkaW5lX29wdGlvbnMpXG4gXG4gICAgICAgICAgICBkaW5lX29wdGlvbnMgPSBjb21wb25lbnQoJ2RpdicsICdkaW5lX29wdGlvbnMnLCAnZHJpdmUgdGhydScpXG4gICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkaW5lX29wdGlvbnMpXG4gXG4gICAgICAgICAgICBkaW5lX29wdGlvbnMgPSBjb21wb25lbnQoJ2RpdicsICdkaW5lX29wdGlvbnMnLCAncHJpdmF0ZSBmdW5jdGlvbiByb29tIChib29raW5nIGVzc2VudGlhbCknKVxuICAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGluZV9vcHRpb25zKVxuIFxuICAgICAgICAgICAgbGV0IG1lbnVfZ2FsbGVyeSA9IGNvbXBvbmVudCgnZGl2JywgJ21lbnVfZ2FsbGVyeScpXG4gICAgICAgICAgICAgICAgbGV0IGdhbGxlcnlfdGl0bGUgPSBjb21wb25lbnQoJ2RpdicsICdnYWxsZXJ5X3RpdGxlJywgJ0dhbGxlcnknKVxuICAgICAgICAgICAgICAgIGxldCBnYWxsZXJ5X2ltZ3MgPSBjb21wb25lbnQoJ2RpdicsICdnYWxsZXJ5X2ltZ3MnKVxuICAgICAgICAgICAgICAgIGxldCBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBtZW51X2dhbGxlcnkuYXBwZW5kQ2hpbGQoZ2FsbGVyeV90aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgbWVudV9pdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBtZW51X2l0ZW0oaXRlbSwgbWVudV9kZXNjc1tpZHhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FsbGVyeV9pbWdzLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbWVudV9nYWxsZXJ5LmFwcGVuZENoaWxkKGdhbGxlcnlfaW1ncylcbiAgICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVfZ2FsbGVyeSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICByZXR1cm4gY29udGVudFxufVxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvc2VfbWVudSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==