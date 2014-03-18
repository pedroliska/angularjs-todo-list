
var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoCtrl', function($scope){
  $scope.todos = [
    'gather camping gear from attic',
    'buy new bike tube',
    'tune your bike',
    'change bike pedals'].map(function (item) {
      return descToTodo(item);
    });
  $scope.todos[3].done = true;
  $scope.addTodo = function(description) {
    $scope.todos.push(descToTodo(description));
  };
  $scope.deleteDone = function() {
    var indecesToDelete = $scope.todos
      .map(function(item, index){ 
        return {'index': index, 'done':item.done}; 
      })
      .filter(function (item){ return done; });
  };

  function descToTodo(desc) {
    return {'description': desc, done: false};
  }
});