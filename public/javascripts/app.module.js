(function () {
    'use strict';
    var appName = 'weather-boiling-app'
    angular.module(appName, [])
        .constant('_', window._)
        .constant('moment', window.moment); // see: http://stackoverflow.com/questions/23862119/how-to-make-lodash-work-with-angular-js

    angular.module(appName).controller('MarathonsController', MarathonsController);
    MarathonsController.$inject = ['$http', '_', 'moment', '$log'];

    angular.module(appName).controller('PaceCalculatorController', PaceCalculatorController);
    PaceCalculatorController.$inject = ['$http', '$log'];
})();