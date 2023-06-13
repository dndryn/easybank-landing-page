"use strict";
(self["webpackChunkeasybank"] = self["webpackChunkeasybank"] || []).push([[860],{

/***/ 860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggle": () => (/* binding */ toggle)
/* harmony export */ });
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);


var toggle = (function () {
    var active = false;
    var array = [];
    var span = document.createElement("span");
    for (var i = 1; i <= 3; i++) {
        var copy = span.cloneNode();
        copy.setAttribute("id", "span_".concat(i));
        array.push(copy);
    }
    var element = document.createElement("a");
    element.setAttribute("id", "menu__toggle");
    element.append.apply(element, array);
    _component_main__WEBPACK_IMPORTED_MODULE_0__/* .main.appendChild */ .DH.appendChild(_component_main__WEBPACK_IMPORTED_MODULE_0__/* .overlay */ .IJ);
    function handle_Click(e) {
        //TODO: remove child element when it's unused.
        if (!active) {
            console.log("menu opened");
            element.classList.toggle("is-open");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .overlay.setAttribute */ .IJ.setAttribute("id", "menu__overlay--visible");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.remove */ .GI.classList.remove("menu--hidden");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.add */ .GI.classList.add("menu--visible");
            document.body.style.overflowY = "hidden";
            active = true;
        }
        else {
            console.log("menu closed");
            element.classList.toggle("is-open");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.remove */ .GI.classList.remove("menu--visible");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .menu.classList.add */ .GI.classList.add("menu--hidden");
            _component_main__WEBPACK_IMPORTED_MODULE_0__/* .overlay.setAttribute */ .IJ.setAttribute("id", "menu__overlay--hidden");
            document.body.style.overflowY = "auto";
            active = false;
        }
    }
    element.addEventListener("click", handle_Click);
    _component_main__WEBPACK_IMPORTED_MODULE_0__/* .overlay.addEventListener */ .IJ.addEventListener("click", handle_Click);
    return element;
})();



/***/ })

}]);
//# sourceMappingURL=860.app.bundle.js.map