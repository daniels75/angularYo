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
mainModule.controller('SampleTextCtrl', function ($scope) {
  $scope.sampleText = "Sample Test";
});

mainModule.controller('ExpressionCtrl',
[
  '$scope', '$parse', function ($scope, $parse) {
    $scope.$watch('expr', function(newVal, oldVal, scope){
      if(newVal !== oldVal){
        // Let's set up our parseFun with the expression
        var parseFun = $parse(newVal);
        // Get the value of the parsed expression
        $scope.parsedValue = parseFun(scope);
        console.log($scope.parsedValue);
      }
    });
  }
]
);
//angular.module('angularYoApp', ['emailParser']);

mainModule
/*
.config(['$interpolateProvider',
  function($interpolateProvider) {
    $interpolateProvider.startSymbol('__');
    $interpolateProvider.endSymbol('__');
  }
]
)
*/
.factory('EmailParser', ['$interpolate',
  function($interpolate){
    // a service to handle parsing
    return {
      parse: function(text, context) {
        var template = $interpolate(text);
        return template(context);
      }
    }
  }
]);

mainModule.controller('EmailCtrl',
[
  '$scope', 'EmailParser', function($scope, EmailParser) {
      // Set up a watch
      $scope.$watch('emailBody', function(body){
          if (body){
            $scope.previewText = EmailParser.parse(body, {
              email: $scope.to
            });
          }
      });

  }
]
);

mainModule.controller('ClockCtrl', function($scope) {
  $scope.clock = {
    now: new Date()
  };
  var updateClock = function(){
    $scope.clock.now = new Date();
  };

  setInterval(function(){ 
    $scope.$apply(updateClock);
  }, 1000);

  updateClock();
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


// filters

mainModule.filter('capitalizeleter', function() {
  return function(input){
    // input will be the string we pass in
    if (input){
      return input[0].toUpperCase() + input.slice(1);
    }
  }
});