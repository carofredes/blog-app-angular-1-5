'use strict';

angular.module('blogList').
component('blogList', {
    templateUrl: '/templates/blog-list.html',
    controller: function($routeParams, $scope){

        $scope.items = [
            {title:"title1", id:1, description:"description1"},
            {title:"title2", id:2, description:"description2"},
            {title:"title3", id:3, description:"description3"},
            {title:"title4", id:4, description:"description4"},
        ]
    }
});