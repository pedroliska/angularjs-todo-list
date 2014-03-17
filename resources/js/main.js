
var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoCtrl', function($scope){
  $scope.todos = [
    'gather camping gear from attic',
    'buy new bike tube',
    'tune your bike',
    'change bike pedals'].map(function (item) {
      return {'description': item, done: false};
    });
});