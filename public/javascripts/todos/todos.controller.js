function TodosController($http) {
    'use strict';

    var vm = this;

    $http.get('/todos').then(successCallback, errorCallback);

    function successCallback(response) {
        /*console.log('success');
        console.dir(response);*/
        
        vm.todos = response.data;
    }

    function errorCallback(response) {
        console.log('error');
        console.dir(response);
    }
}