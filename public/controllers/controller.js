(function(){
var contactlist = angular.module("contactlist", []);
var index = angular.module("index", []);

contactlist.controller("TableController", function ($scope, $http) {

	$http.get('/contactlist').success(function(res){
		console.log("data requested sent back");
		$scope.contactlist = res;
	});

});

index.controller("IndexController", function($scope){
	console.log("herp derp index");
});

})();