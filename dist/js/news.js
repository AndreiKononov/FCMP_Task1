"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var News =
/*#__PURE__*/
function () {
  function News(API_KEY, HOST_URL, SOURCES_PARAM) {
    _classCallCheck(this, News);

    this.API_KEY = API_KEY;
    this.HOST_URL = HOST_URL;
    this.SOURCES_PARAM = SOURCES_PARAM;
  }

  _createClass(News, [{
    key: "getUrl",
    value: function getUrl(country) {
      return "".concat(this.HOST_URL).concat(this.SOURCES_PARAM, "?country=").concat(country, "&apiKey=").concat(this.API_KEY);
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ru';
      return new Promise(function (resolve, reject) {
        var url = _this.getUrl(country);

        return fetch(url).then(function (response) {
          setTimeout(function () {
            return resolve(response.json());
          }, 1000);
        });
      });
    } // async getData(country = 'ru') {
    //   const url = this.getUrl(country);
    //   const request = new Request(url);
    //   return await fetch(request)
    //     .then((response) => {
    //       setTimeout( () => response.json(), 1000);
    //     })
    // }

  }]);

  return News;
}();