'use strict';

angular.module('blogApp').
    config(
        function(
            $locationProvider,
            $routeProvider
        ){
        $locationProvider.html5Mode({
            enabled:true
        })
        $routeProvider.
            when("/", {
                template: "<blog-list></blog-list>"
            }).
            when("/about", {
                templateUrl: "/templates/about.html"
            }).
            otherwise({
                template: "not found"
            })

});