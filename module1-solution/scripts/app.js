
(function() {
'use strict';

angular.module('LunchApp', [])

.controller('LunchCheckController', function($scope){
	
	$scope.message = "";
	$scope.inputText = "";
	$scope.sayHello = function() {

		
		$scope.message = "Please enter data first";
		var finalInput = $scope.inputText;

		checkLength(finalInput.split(','));

		var totalInput = 0;

	}

	function checkLength(string) {
		var n = string.length;

		
		if (string == ''){
			$scope.message = "Please enter data first";
		}
		else if (n < 4) {
		
		$scope.message = "Enjoy!";
		}

		else if (n > 3) {
			
			$scope.message = "Too much!";
		}
	}

});

})();
