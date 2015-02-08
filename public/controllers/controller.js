(function(){
var contactlist = angular.module("contactlist", []);
var index = angular.module("index", []);

contactlist.controller("TableController", function ($scope, $http) {

	var refresh = function(){
		$http.get('/contactlist').success(function(res){
			console	.log("data requested sent back");
			$scope.contactlist = res;
		});
	};
	refresh();

	$scope.removeContact = function(id){
		console.log(id);
		$http.delete('/contactlist/'+id).success(function(res){
			console.log("removed " + res);
			refresh();
		});
	}


});

index.controller("IndexController", function($scope,$http){
	$scope.addContact = function(){
		console.log($scope.index.contact);
		$http.post('/contactlist', $scope.index.contact).success(function(res){
			console.log("Contact added to database");
			console.log(res);
		});
	};
});

})();