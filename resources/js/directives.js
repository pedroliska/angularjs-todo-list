angular.module('todoApp').directive('valEmpty', function() {

  return {
    link: function (scope, element, attrs) {
      
      element.on('keyup', function() {
        
        var cssClassName = attrs.valEmpty;
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
        scope.$apply(attrs.myClick);
      });

    }
  };

});