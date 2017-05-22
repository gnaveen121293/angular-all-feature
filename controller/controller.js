var app=angular.module('myApp',[]);

app.controller('myController', ['$scope','productService',function($scope,productService){

	$scope.message="hello navin";
	$scope.productSer=productService.productDetails();
	
}])