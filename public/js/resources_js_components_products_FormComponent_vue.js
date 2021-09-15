"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_FormComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var defaultProduct = {
  name: '',
  description: '',
  price: 0.0,
  image: 'https://via.placeholder.com/150'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FormComponent',
  props: {
    edit: {
      "default": false
    },
    idProduct: {
      required: false
    }
  },
  data: function data() {
    return {
      product: Object.assign({}, defaultProduct)
    };
  },
  mounted: function mounted() {
    this.showProduct();
  },
  methods: {
    showProduct: function showProduct() {
      var _this = this;

      if (!this.idProduct) return false;
      axios.get('/api/products/' + this.idProduct).then(function (response) {
        _this.product = response.data.product;
      });
    },
    newProduct: function newProduct() {
      var _this2 = this;

      axios.post('/api/products', this.product).then(function (response) {
        _this2.$emit('add', response.data.product);
      });
    },
    editProduct: function editProduct() {
      var _this3 = this;

      axios.put('/api/products/' + this.idProduct, this.product).then(function (response) {
        _this3.$router.push({
          name: 'indexProduct'
        });
      });
    },
    saveForm: function saveForm() {
      if (this.edit) {
        this.editProduct();
      } else {
        this.newProduct();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/products/FormComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/products/FormComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=template&id=68cb2fce& */ "./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce&");
/* harmony import */ var _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/FormComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormComponent_vue_vue_type_template_id_68cb2fce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormComponent.vue?vue&type=template&id=68cb2fce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/FormComponent.vue?vue&type=template&id=68cb2fce& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.saveForm()
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.name,
                expression: "product.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "name" },
            domProps: { value: _vm.product.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.product, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "description" } }, [
            _vm._v("Description")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.description,
                expression: "product.description"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "description" },
            domProps: { value: _vm.product.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.product, "description", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "price" } }, [_vm._v("Price")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.product.price,
                expression: "product.price"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "price" },
            domProps: { value: _vm.product.price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.product, "price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);