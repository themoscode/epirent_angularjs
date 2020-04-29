app.directive('restrictField', function () {
    return {
        restrict: 'AE',
        scope: {
            restrictField: '='
        },
        link: function (scope) {
          // this will match spaces, tabs, line feeds etc
          // you can change this regex as you want
          var regex = /\s/g;

          scope.$watch('restrictField', function (newValue, oldValue) {
              if (newValue != oldValue && regex.test(newValue)) {
                scope.restrictField = newValue.replace(regex, '');
              }
          });
        }
    };
  });


 app.directive('numericOnly', function(){
   return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
}); 


app.directive('bindHtmlCompile', function($compile) {
    return {
      restrict: "A",
      scope: {
        bindHtmlCompile: "="
      },
      link: function(scope, elem) {
        scope.$watch("bindHtmlCompile", function(newVal) {
          elem.html('');
          var newElem = angular.element(newVal);
          var compileNewElem = $compile(newElem)(scope.$parent);
          elem.append(compileNewElem);
        });
      }
    };
  });

  