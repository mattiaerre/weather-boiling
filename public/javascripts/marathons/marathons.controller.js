function MarathonsController($http, _, moment, $log) {
    'use strict';

    var vm = this;
    vm.marathons = [];
    vm.getWeather = getWeather;

    $http.get('/marathons').then(function successCallback(response) {
        var marathons = [];

        _.each(response.data, function (item) { // todo: name this function
            var when = moment(item.when, 'DD/MM/YYYY');
            // mapping
            marathons.push({
                id: item.id,
                fromNow: when.fromNow(),
                unix: when.unix(),
                future: when.isAfter(moment()),
                format: when.format('dddd, MMMM Do YYYY'),
                city: item.info.city
            });
        });

        // sorting
        vm.marathons = _.sortByOrder(marathons, ['unix'], ['desc']);
    }, errorCallback);

    function errorCallback(response) {
        $log.log('error');
        $log.log(response);
    }

    function getWeather(marathon) {
        $http.get('/weather?q=' + marathon.city).then(function successCallback(response) {
            var weather = response.data.weather;
            vm.weather = { city: weather.name, description: weather.weather[0].main, icon: weather.weather[0].icon, temp: weather.main.temp };
        }, errorCallback);
    }
}