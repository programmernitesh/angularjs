var app = angular.module("app",[])
app.controller('emp',['$scope','calFactory',function($scope,calFactory){
    $scope.a=10;
    $scope.b=20;
    $scope.doSum = function()
    {
      // $scope.Sum = calFactory.getSum($scope.a,$scope.b);
      calFactory.getSum($scope.a,$scope.b,function(result){
        $scope.Sum = result;
      });
    };

    
}]);

app.factory('calFactory',['$http','$log',function($http,$log){
       $log.log("Installing calFactory..."); 
       var ocalculator = {};
       //for normal return the value

       ocalculator.getSum = function(a,b){
        return parseInt(a)+parseInt(b);
       };

      // for callback function
      //ocalculator.getSum = function(a, b, cb){
      //    var s = parseInt(a) + parseInt(b);
      //    cb(s);
      //};

     
       return ocalculator;
}]);