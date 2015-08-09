(function(angular) {
    'use strict';
    angular
        .module('vintercom', [
            'vintercom.date-range-slider',
            'vintercom.events-list'
        ])
        .config(function($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        });
})(window.angular);
