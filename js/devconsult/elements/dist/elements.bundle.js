/* eslint-disable */
this.BX = this.BX || {};
(function (exports,main_core,ui_vue3) {
    'use strict';

    var ElementsList = {
      props: {
        elements: {
          type: Array,
          required: true
        }
      },
      data: function data() {},
      template: "\n        <transition name=\"fade\">\n            <div v-if=\"elements.length\" class=\"elements-list\">\n                <div v-for=\"(element, index) in elements\" :key=\"index\">\n                    {{ element.NAME }}\n                </div>\n            </div>\n        </transition>\n    "
    };

    var ElementAddList = {
      data: function data() {},
      methods: {
        sendMessage: function sendMessage() {
          this.$emit("send-message");
        }
      },
      template: "\n        <button @click=\"sendMessage\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</button>\n    "
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
    var _application = /*#__PURE__*/new WeakMap();
    var Elements = /*#__PURE__*/function () {
      function Elements(rootNode) {
        babelHelpers.classCallCheck(this, Elements);
        _classPrivateFieldInitSpec(this, _application, {
          writable: true,
          value: void 0
        });
        this.rootNode = document.querySelector(rootNode);
      }
      babelHelpers.createClass(Elements, [{
        key: "start",
        value: function start() {
          var context = this;
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'Elements',
            components: {
              ElementsList: ElementsList,
              ElementAddList: ElementAddList
            },
            beforeCreate: function beforeCreate() {
              this.$bitrix.Application.set(context);
            },
            data: function data() {
              return {
                elements: []
              };
            },
            methods: {
              sendMessage: function sendMessage() {
                var _this = this;
                BX.showWait();
                BX.ajax.runComponentAction('devconsullt:sample', 'sendMessage', {
                  mode: "class",
                  data: {}
                }).then(function (response) {
                  BX.closeWait();
                  _this.elements = response.data;
                }, function (response) {
                  alert('При ajax запросе произошла ошибка');
                  BX.closeWait();
                });
              }
            },
            mounted: function mounted() {
              this.sendMessage();
            },
            template: "\n\t\t\t\t<ElementAddList @send-message=\"sendMessage\" />\n\t\t\t\t<br/>\n\t\t\t\t<ElementsList :elements=\"elements\" />\n\t\t\t"
          }));
          babelHelpers.classPrivateFieldGet(this, _application).mount(this.rootNode);
        }
      }]);
      return Elements;
    }();

    exports.Elements = Elements;

}((this.BX.Devconsult = this.BX.Devconsult || {}),BX,BX.Vue3));
