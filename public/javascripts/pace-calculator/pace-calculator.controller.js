function PaceCalculatorController($log) {
    'use strict';

    var vm = this;
    vm.minutes = 4;
    vm.seconds = 44;
    vm.kph = null;

    vm.toKph = toKph

    function toKph() {
        var kph = 60 / (vm.minutes + (vm.seconds / 60));
        vm.kph = Math.round(kph * 100) / 100;
        $log.info('minutes: [' + vm.minutes + '] seconds: [' + vm.seconds + '] kph: [' + vm.kph + ']');
    }
    
    vm.toKph();
}