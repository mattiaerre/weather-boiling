function PaceCalculatorController($http, $log) {
    'use strict';

    var vm = this;
    vm.toSpeed = toSpeed;

    vm.kilometers = 9;
    vm.toMiles = toMiles;
    toMiles();

    $http.get('/pace-calculator').then(function successCallback(response) {
        setTime(response.data);
        toSpeed();
    }, errorCallback);

    function setTime(data) {
        vm.minutes = data.minutes;
        vm.seconds = data.seconds;
    }

    function toSpeed() {
        var kph = 60 / (vm.minutes + (vm.seconds / 60));
        var mph = kph * 0.621371;

        vm.kph = Math.round(kph * 100) / 100;
        vm.mph = Math.round(mph * 100) / 100;

        $log.info('minutes: [' + vm.minutes + '] seconds: [' + vm.seconds + '] kph: [' + vm.kph + '] mph: [' + vm.mph + ']');

        $http.post('/pace-calculator', { paceCalculatorDefaults: { minutes: vm.minutes, seconds: vm.seconds } }).then(function successCallback(response) {
            setTime(response.data);
        }, errorCallback);
    }

    function toMiles() {
        var miles = vm.kilometers * 0.621371;
        vm.miles = Math.round(miles * 100) / 100;
        
        $log.info('kilometers: [' + vm.kilometers + '] miles: [' + vm.miles + ']');
    }

    function errorCallback(response) {
        $log.log('error');
        $log.log(response);
    }
}