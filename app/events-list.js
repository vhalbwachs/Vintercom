(function(angular) {
    'use strict';
    angular
        .module('vintercom.events-list', [
            'vintercom.events-data',
            'vintercom.time'
        ])
        .controller('eventsListController', function($rootScope, EventsFactory, DateTimeHelper) {
            this.events = EventsFactory.getEvents();
            $rootScope.$on('filterEvents', function(e, min, max) {
                this.events = EventsFactory.getEvents().filter(function(event) {
                    var eventTs = DateTimeHelper.getTimestamp(event.date);
                    return eventTs >= min && eventTs <= max;
                });
            }.bind(this));
        })
        .directive('eventsList', function() {
            return {
                scope: {},
                controller: 'eventsListController',
                controllerAs: 'eventsList',
                templateUrl: 'templates/events-list.html',
                replace: true
            };
        });
})(window.angular);
