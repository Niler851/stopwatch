var app = angular.module("app", []);

app.controller("tableCtrl", function ($scope, $http) {

	$http.get('/contactlist').success(function(res){
		console.log("data requested sent back");
		$scope.contactlist = res;
	});

});
