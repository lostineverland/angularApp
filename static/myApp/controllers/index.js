var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    // This chunk of js.
    
    $scope.listItems = ['a', 'b', 'c', 'd'];
    
    $scope.name = 'Louis';
    
    $scope.changeName = function () {
        $scope.name = 'Carlos';
    };
});