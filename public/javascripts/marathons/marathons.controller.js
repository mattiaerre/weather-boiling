function MarathonsController($http, _, moment) {
    'use strict';

    var vm = this;

    $http.get('/marathons').then(successCallback, errorCallback);

    function successCallback(response) {
        var marathons = [];

        _.each(response.data, function (item) {
            var when = moment(item.when, 'DD/MM/YYYY');
            // mapping
            marathons.push({ id: item.id, fromNow: when.fromNow(), unix: when.unix(), future: when.isAfter(moment()), format: when.format('dddd, MMMM Do YYYY') });
        });

        // sorting
        vm.marathons = _.sortByOrder(marathons, ['unix'], ['desc']);

        console.dir(vm.marathons);
    }

    function errorCallback(response) {
        console.log('error');
        console.dir(response);
    }
}