/**
 * Created by Justin on 7/2/2014.
 */
(function(angular){
    "use strict";
    var app = angular.module('Swagwise');
    app.controller('SwagController', function($scope, SwagService){
        $scope.swagSearch = '';
        SwagService.swag()
            .then(function(response){
                console.log(response.data);
                $scope.swag = response.data;
            });
    });
})(window.angular);