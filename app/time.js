(function(angular, moment) {
    'use strict';
    angular
        .module('vintercom.time', [])
        .factory('DateTimeHelper', function() {
            return {
                getTimestamp: function(date) {
                    return Number(date.format('x'));
                },
                parse: function(year, month, day) {
                    return moment([year, month - 1, day]);
                },
                format: function(date, format) {
                    date = moment.isMoment(date) ? date : moment(date);
                    return date.format(format);
                }
            };
        })
        .filter('formattedDate', function(DateTimeHelper) {
            return function(input, format) {
                return DateTimeHelper.format(input, format);
            };
        });
})(window.angular, window.moment);
