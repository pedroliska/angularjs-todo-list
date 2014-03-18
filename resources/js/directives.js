angular.module('todoApp').directive('valEmpty', function() {

  return {
    link: function (scope, element, attrs) {
      
      element.on('keyup', function() {
        var cssClassName = element.attr('val-empty');
        if (element.val().trim() === '')
           element.addClass(cssClassName);
        else 
           element.removeClass(cssClassName);

      });

    }
  };

}).directive('myClick', function() {

  return {
    link: function(scope, element, attrs) {

      element.on('click', function () {
        scope.$parent.$apply(attrs.myClick);
      });

    },
    scope: {

    }
  };

});