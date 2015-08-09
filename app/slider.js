(function(angular) {
    'use strict';
    angular
        .module('vintercom.date-range-slider', ['ui.slider', 'vintercom.events-data'])
        .controller('dateRangeController', function($scope, $rootScope, EventsFactory) {
            var timestamps = EventsFactory.getEvents().map(function(event) {
                return event.date.format('x');
            });
            this.max = Math.max.apply(Math, timestamps);
            this.min = Math.min.apply(Math, timestamps);
            this.range = [this.min, this.max];
            $scope.$watch('slider.range', function(range) {
                $rootScope.$broadcast('filterEvents', range[0], range[1]);
            });
        })
        .directive('dateRangeSlider', function() {
            return {
                scope: {},
                controller: 'dateRangeController',
                controllerAs: 'slider',
                templateUrl: 'templates/slider.html'
            };
        });
})(window.angular);
