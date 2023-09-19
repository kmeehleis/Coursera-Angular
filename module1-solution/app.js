(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

$scope.str = "";
$scope.totalWords = 0;
$scope.sendMessage = "";


$scope.lunchchecker = function () {
  //console.log("Button Checked")
  var words = $scope.str.split(', ')
  $scope.totalWords = words.length
  // console.log("words " + words)
  // console.log("totalWords " + $scope.totalWords)
  // console.log(words[1])
  $scope.validateNames(words);
  
  };

$scope.validateNames = function (words) {
  // console.log("words[0] " + words[0]);
  
  if (words[0] === undefined || words[0] === ""){
    // console.log("Words Undefined");
    $scope.sendMessage = "Please enter data first";
    $scope.sayMessage();
    // console.log("Message " + $scope.sendMessage);
  }
  else {
    // console.log("Words Defined");
    if ($scope.totalWords > 3){
    $scope.sendMessage = "Too much!";
    }
    else {
    $scope.sendMessage = "Enjoy!";
    $scope.sayMessage();
    };
  };
};

$scope.sayMessage = function () {
    // console.log("Send Message");
    // $scope.sendMessage = "Lunch Message";
    // return "Lunch Message";
    return $scope.sendMessage;
  };


};

})();
