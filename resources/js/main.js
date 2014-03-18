
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
  $scope.newTodoDesc = 'new item';

  $scope.addTodo = function(description) {
    $scope.todos.push(descToTodo(description));
  };
  $scope.deleteDone = function() {
    $scope.todos = pendingTodos();
  };
  $scope.hasDoneTodos = function() {
    return pendingTodos().length < $scope.todos.length;
  };

  function descToTodo(desc) {
    return {'description': desc, 'done': false};
  }
  function pendingTodos() {
    return $scope.todos.filter(function (item) { return !item.done; });
  }

});