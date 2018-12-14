// Singleton
export let showPopUp = (function () {
  let instance;
  function init() {
    return {
      display: function (error) {
        alert(error);
      }
    };
  }
    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
  };
})();