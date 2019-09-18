var app = angular.module("app",[])
app.controller('emp',['$scope','calService',function($scope,calService){
    $scope.a=10;
    $scope.b=20;
    $scope.doSum = function()
    {
      $scope.Sum = calService.getSum($scope.a,$scope.b);
      
      //calService.getSum($scope.a,$scope.b,function(result){
      //  $scope.Sum = result;
      //});
    };

    
}]);

app.service('calService',['$http','$log',function($http,$log){
       $log.log("Installing calService..."); 
       
        //for normal return the value

       //this.getSum = function(a,b){
       //     return parseInt(a) + parseInt(b);
       //};
      
        
      

      // for callback function


      this.getSum = function(a, b){
          var s = parseInt(a) + parseInt(b);
          return s;
      };

      //for web services
     //ocalculator.getSum = function(a, b, cb)
     //{
       // $http({
         // url:'http://localhost:4467/Sum?a=' + a + '&b=' + b,
         // method: "GET"
       // }).then(function(resp){
       //     $log.log(resp.data);
       //     cb(resp.data);
       // },function(resp){
       //     $log.error("Error Occured");
       // });
     //};
       
}]);