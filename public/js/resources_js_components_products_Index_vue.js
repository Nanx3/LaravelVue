"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
var FormComponent = function FormComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_products_FormComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./FormComponent.vue */ "./resources/js/components/products/FormComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'indexProducts',
  components: {
    FormComponent: FormComponent
  },
  data: function data() {
    return {
      products: [
        /* {
             id: 1,
             name: 'Product 1',
             description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
             price: 20,
             image: 'https://via.placeholder.com/150'
         },
                         {
             id: 2,
             name: 'Product 2',
             description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
             price: 10,
             image: 'https://via.placeholder.com/150'
         }*/
      ]
    };
  },
  mounted: function mounted() {
    this.showProducts();
  },
  methods: {
    addProduct: function addProduct(product) {
      this.products.push(product);
    },
    deleteProduct: function deleteProduct(productId) {
      var _this = this;

      axios["delete"]('/api/products/' + productId).then(function (response) {
        var pos = _this.products.map(function (product) {
          return product.id;
        }).indexOf(productId);

        _this.products.splice(pos, 1);
      });
    },
    showProducts: function showProducts() {
      var _this2 = this;

      axios.get('/api/products').then(function (response) {
        _this2.products = response.data.products;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/products/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/products/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f94d305c& */ "./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/products/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/products/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f94d305c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=f94d305c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/Index.vue?vue&type=template&id=f94d305c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "offset-md-3 col-md-6" },
          [
            _c("h3", [_vm._v("Add new product")]),
            _vm._v(" "),
            _c("form-component", { on: { add: _vm.addProduct } })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "album py-5 bg-light" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.products, function(product) {
            return _c("div", { key: product.id, staticClass: "col-md-4" }, [
              _c("div", { staticClass: "card mb-4 shadow-sm" }, [
                _c("img", {
                  staticClass: "card-img-top",
                  attrs: { src: product.image }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h3", [_vm._v(_vm._s(product.name))]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(_vm._s(product.description))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "btn-group" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-sm btn-outline-secondary",
                              attrs: {
                                to: {
                                  name: "editProduct",
                                  params: { id: product.id }
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-secondary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteProduct(product.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v(_vm._s(product.price) + "   Euros")
                      ])
                    ]
                  )
                ])
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);