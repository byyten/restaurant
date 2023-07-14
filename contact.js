"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compose_contact: () => (/* binding */ compose_contact)
/* harmony export */ });
/* harmony import */ var _static_map_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_map_1.png */ "./src/static_map_1.png");
/* harmony import */ var _el_reno_66_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./el_reno_66.png */ "./src/el_reno_66.png");


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

function compose_contact() {
    let content = component('div', 'content','')


    let contact = component('div', 'contact', '')

        let page_title = component('div', 'page_title', 'Contact')
    
        contact.appendChild(page_title)

        let page_body = component('div', 'page_body', '')

            let info_img = component('img', 'info_img', '')
            info_img.src = _el_reno_66_png__WEBPACK_IMPORTED_MODULE_1__
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
            info_map.src = _static_map_1_png__WEBPACK_IMPORTED_MODULE_0__
            info_map.alt = "Static map image showing location of Sid's Diner"
        
        page_loc.appendChild(info_dir)
        page_loc.appendChild(info_map)

        contact.appendChild(page_loc)
        content.appendChild(contact)

    return content
}

// document.body.appendChild(compose_contact())

/***/ }),

/***/ "./src/el_reno_66.png":
/*!****************************!*\
  !*** ./src/el_reno_66.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2433bc0ecea240683494.png";

/***/ }),

/***/ "./src/static_map_1.png":
/*!******************************!*\
  !*** ./src/static_map_1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "783d6ffa30275ce01406.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRjtBQUN6Qzs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFUTtBQUNSOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsNENBQVU7QUFDckM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGljX21hcCBmcm9tICcuL3N0YXRpY19tYXBfMS5wbmcnXG5pbXBvcnQgZWxfcmVub182NiBmcm9tICcuL2VsX3Jlbm9fNjYucG5nJ1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuXG5mdW5jdGlvbiBjb21wb25lbnQodHlwZSwgY2xhc3NlcywgdGV4dCA9ICcnKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoY2xhc3NlcyAhPT0gJycpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuc3BsaXQoJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuXG5jb25zb2xlLmxvZygnY29udGFjdCBtYWRlIGl0IScpXG5cbmV4cG9ydCAgZnVuY3Rpb24gY29tcG9zZV9jb250YWN0KCkge1xuICAgIGxldCBjb250ZW50ID0gY29tcG9uZW50KCdkaXYnLCAnY29udGVudCcsJycpXG5cblxuICAgIGxldCBjb250YWN0ID0gY29tcG9uZW50KCdkaXYnLCAnY29udGFjdCcsICcnKVxuXG4gICAgICAgIGxldCBwYWdlX3RpdGxlID0gY29tcG9uZW50KCdkaXYnLCAncGFnZV90aXRsZScsICdDb250YWN0JylcbiAgICBcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChwYWdlX3RpdGxlKVxuXG4gICAgICAgIGxldCBwYWdlX2JvZHkgPSBjb21wb25lbnQoJ2RpdicsICdwYWdlX2JvZHknLCAnJylcblxuICAgICAgICAgICAgbGV0IGluZm9faW1nID0gY29tcG9uZW50KCdpbWcnLCAnaW5mb19pbWcnLCAnJylcbiAgICAgICAgICAgIGluZm9faW1nLnNyYyA9IGVsX3Jlbm9fNjZcbiAgICAgICAgICAgIGluZm9faW1nLmFsdCA9IFwiSW1hZ2Ugc2hvd2luZyByb3V0ZSA2NiBoaWdod2F5IHNpZ24sIHJhaWx3YXkgY2Fib29zZSBhbmQgUlZcIlxuXG4gICAgICAgIHBhZ2VfYm9keS5hcHBlbmRDaGlsZChpbmZvX2ltZylcblxuICAgICAgICAgICAgbGV0IHBhZ2VfaW5mbyAgPSBjb21wb25lbnQoJ2RpdicsICdwYWdlX2luZm8nLCAnR2V0IGluIHRvdWNoIG9uOicpXG4gICAgICAgICAgICBsZXQgaW5mb190ZWwgPSBjb21wb25lbnQoJ2RpdicsICdpbmZvX3RlbCcsICdUOiAoNDA1KS0yNjItNzc1NycpXG5cbiAgICAgICAgICAgIGxldCBpbmZvX2VtYWlsID0gY29tcG9uZW50KCdkaXYnLCAnaW5mb19lbWFpbCcsICdFOiBzaWRzZGluZXJlbHJlbm9AeWFob28uY29tJylcbiAgICAgICAgICAgIFxuICAgICAgICBwYWdlX2JvZHkuYXBwZW5kQ2hpbGQocGFnZV9pbmZvKVxuICAgICAgICBwYWdlX2JvZHkuYXBwZW5kQ2hpbGQoaW5mb190ZWwpXG4gICAgICAgIHBhZ2VfYm9keS5hcHBlbmRDaGlsZChpbmZvX2VtYWlsKVxuXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGFnZV9ib2R5KVxuXG4gICAgICAgIGxldCBwYWdlX2xvYyAgPSBjb21wb25lbnQoJ2RpdicsICdwYWdlX2xvYycsICdPciBqdXN0IHR1cm4gdXA6JylcbiAgICAgICAgICAgIGxldCBpbmZvX2RpciA9IGNvbXBvbmVudCgnZGl2JywgJ2luZm9fZGlyJywgJ0E6IDMwMCBTb3V0aCBDaG9jdGF3IEF2ZW51ZSwgRWwgUmVubywgT0sgNzMwMzYnKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGluZm9fbWFwID0gY29tcG9uZW50KCdpbWcnLCAnJywgJycpXG4gICAgICAgICAgICBpbmZvX21hcC5zcmMgPSBzdGF0aWNfbWFwXG4gICAgICAgICAgICBpbmZvX21hcC5hbHQgPSBcIlN0YXRpYyBtYXAgaW1hZ2Ugc2hvd2luZyBsb2NhdGlvbiBvZiBTaWQncyBEaW5lclwiXG4gICAgICAgIFxuICAgICAgICBwYWdlX2xvYy5hcHBlbmRDaGlsZChpbmZvX2RpcilcbiAgICAgICAgcGFnZV9sb2MuYXBwZW5kQ2hpbGQoaW5mb19tYXApXG5cbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChwYWdlX2xvYylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb3NlX2NvbnRhY3QoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=