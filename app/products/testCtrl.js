(function(){
   "use strict";

    angular.module("productManagement").controller('testCtrl', function($scope,JobService) {
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

        $scope.job = JobService.getJob();

        $scope.setJob = function(job){
            $scope.job = JobService.setJob(job);
        }

    });

}());