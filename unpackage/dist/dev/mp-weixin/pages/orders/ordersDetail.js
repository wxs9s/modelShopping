(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orders/ordersDetail"],{

/***/ 79:
/*!**********************************************************************************!*\
  !*** E:/Project/agent/testDemo/main.js?{"page":"pages%2Forders%2FordersDetail"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ordersDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/orders/ordersDetail.vue */ 80));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ordersDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 80:
/*!***************************************************************!*\
  !*** E:/Project/agent/testDemo/pages/orders/ordersDetail.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersDetail.vue?vue&type=template&id=5b122397&scoped=true& */ 81);
/* harmony import */ var _ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordersDetail.vue?vue&type=script&lang=js& */ 83);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordersDetail.vue?vue&type=style&index=0&id=5b122397&lang=scss&scoped=true& */ 85);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b122397",
  null,
  false,
  _ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/orders/ordersDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/*!**********************************************************************************************************!*\
  !*** E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=template&id=5b122397&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ordersDetail.vue?vue&type=template&id=5b122397&scoped=true& */ 82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_template_id_5b122397_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 82:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=template&id=5b122397&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 = _vm._f("dictFilter")(_vm.status)

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 83:
/*!****************************************************************************************!*\
  !*** E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ordersDetail.vue?vue&type=script&lang=js& */ 84);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 84:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var navigationBar = function navigationBar() {__webpack_require__.e(/*! require.ensure | myComponents/navBar/navigationBar */ "myComponents/navBar/navigationBar").then((function () {return resolve(__webpack_require__(/*! ../../myComponents/navBar/navigationBar.vue */ 87));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




































































































{
  components: {
    navigationBar: navigationBar },

  data: function data() {
    return {
      goods: {},
      orderInfo: {},
      num: 1,
      totalCount: 0,
      status: 0,
      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
      listHeight: 0 };

  },
  onLoad: function onLoad(option) {var _this2 = this;
    this.status = 102;
    // this.status = option.status
    uni.request({
      url: getApp().globalData.apiUrl + '/demo/wx/order/detail',
      method: 'GET',
      data: {
        orderId: 12
        // orderId: option.orderId
      },
      success: function success(res) {
        console.log(res);
        _this2.goods = res.data.data.orderGoods[0];
        _this2.orderInfo = res.data.data.orderInfo;
      } });

    // this.goods = JSON.parse(decodeURIComponent(option.data))

  },
  filters: {
    nameFilter: function nameFilter(data) {
      if (data.length > 12) {
        return data = data.slice(0, 12) + '...';
      }

    },
    dictFilter: function dictFilter(data) {
      var result = '';
      if (data == 101) {
        result = '待付款';
      } else if (data == 102 || data == 103) {
        result = '已取消';
      } else if (data == 201) {
        result = '待发货';
      } else if (data == 202) {
        result = '退款中';
      } else if (data == 203) {
        result = '已退款';
      } else if (data == 301) {
        result = '已发货';
      } else if (data == 401 || data == 402) {
        result = '已完成';
      } else {
        result = '';
      }
      return result;
    } },

  methods: {
    fixSwiperHeight: function fixSwiperHeight(className) {
      var _this = this;
      var info = uni.createSelectorQuery().select(className);
      info.boundingClientRect(function (data) {
        _this.listHeight = data.height + 30 + 'px';
      }).exec();
    }
    // reduce() {
    // 	if(this.num < 1) {
    // 		this.num -= 1;
    // 	}else {
    // 		uni.showToast({
    // 		    title: '最少购买1件',
    // 			icon: 'none',
    // 		    duration: 2000
    // 		});
    // 	}
    // 	this.totalCount = this.num * this.goods.retailPrice
    // },
    // increase() {
    // 	if(this.num >= this.goods.productList[0].num) {
    // 		uni.showToast({
    // 		    title: '最多只能购买'+this.goods.productList[0].num+'件' ,
    // 		    icon: 'none',
    // 			duration: 2000
    // 		});
    // 	}else {
    // 		this.num += 1;
    // 	}
    // 	this.totalCount = this.num * this.goods.retailPrice
    // }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 85:
/*!*************************************************************************************************************************!*\
  !*** E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=style&index=0&id=5b122397&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ordersDetail.vue?vue&type=style&index=0&id=5b122397&lang=scss&scoped=true& */ 86);
/* harmony import */ var _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_workSoftware_HBuilderX_HBuilderXv3_1_17_20210608_HBuilderXv3_1_17_20210608_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ordersDetail_vue_vue_type_style_index_0_id_5b122397_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 86:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/Project/agent/testDemo/pages/orders/ordersDetail.vue?vue&type=style&index=0&id=5b122397&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[79,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orders/ordersDetail.js.map