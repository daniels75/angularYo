'use strict';
// angular.module('sampleModule', []);

var mainModule = angular.module('angularYoApp');


mainModule
  .controller('SamplesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
mainModule.controller('SampleTestCtrl', function ($scope) {
  $scope.sampleTestText = "Sample Test";
});
//angular.module('myModule');

mainModule
  .controller('mySampleCtr', function ($scope, notificationsService) {

    $scope.addNotification = function () {
      notificationsService.push($scope.notification);
      $scope.notification = '';
    };

    $scope.getNotifications = function () {
      return notificationsService.getCurrent();
    };

});

mainModule.service('notificationsService', NotificationsService)
  .value('notificationsArchive', new NotificationsArchive());