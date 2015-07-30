(function(){
   "use strict";

    angular.module("productManagement").controller('testCtrl', function($scope) {
        var users = [
            {
                name: 'Chris',
                email: ''
            },
            {
                name: 'Holly',
                email: ''
            }
        ];

        $scope.formDataTwo = {};
        $scope.formDataTwo.users = users;

    });

}());