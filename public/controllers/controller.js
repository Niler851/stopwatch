(function(){
var contactlist = angular.module("contactlist", ['hSweetAlert']);
var index = angular.module("index", ['hSweetAlert']);

contactlist.controller("TableController", function ($scope, $http, sweet) {

	var refresh = function(){
		$http.get('/contactlist').success(function(res){
			console	.log("data requested sent back");
			$scope.contactlist = res;
		});
	};
	refresh();

	var removeContact = function(id){
		console.log(id);
		// sweet.show('Simple right?');
		$http.delete('/contactlist/'+id).success(function(res){
			console.log("removed " + res);
			refresh();
		});
	}

	    $scope.confirm = function(name, id) {
	        sweet.show({
	            title: 'Confirm',
	            text: 'Delete user '+name+' ?',
	            type: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#DD6B55',
	            confirmButtonText: "Yes, delete it!",
	            closeOnConfirm: true
	        }, function() {
	        	console.log("id of function is: " + id);
	            removeContact(id);
	        });
	    };

});

index.controller("IndexController", function ($scope, $http, sweet){
	$scope.addContact = function(){
		console.log($scope.index.contact);
		$http.post('/contactlist', $scope.index.contact).success(function(res){
			console.log("Contact added to database");
			console.log(res);
			sweet.show('Amazing', 'Thank you for signing up', 'success');
			//$scope.index.reply="Thank you for signing up!";

		});
	};
});



})();

