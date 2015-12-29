(function () {
    'use strict';
    var appName = 'weather-boiling-app'
    angular.module(appName, []);

    angular.module(appName).controller('RunningController', RunningController);

    angular.module(appName).controller('TodosController', TodosController);
    TodosController.$inject = ['$http'];

    angular.module(appName).controller('WeatherController', WeatherController);
})();