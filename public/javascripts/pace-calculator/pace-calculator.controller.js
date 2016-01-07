function PaceCalculatorController($http, $log) {
    'use strict';

    var vm = this;
    vm.toKph = toKph

    $http.get('/pace-calculator').then(function successCallback(response) {
        setTime(response.data);
        toKph();
    }, errorCallback);

    function setTime(data) {
        vm.minutes = data.minutes;
        vm.seconds = data.seconds;
    }

    function toKph() {
        var kph = 60 / (vm.minutes + (vm.seconds / 60));
        vm.kph = Math.round(kph * 100) / 100;
        $log.info('minutes: [' + vm.minutes + '] seconds: [' + vm.seconds + '] kph: [' + vm.kph + ']');

        $http.post('/pace-calculator', { paceCalculatorDefaults: { minutes: vm.minutes, seconds: vm.seconds } }).then(function successCallback(response) {
            setTime(response.data);
        }, errorCallback);
    }

    function errorCallback(response) {
        $log.log('error');
        $log.log(response);
    }
}