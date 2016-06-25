describe('Todo', function () {

  beforeEach(module('ehealth'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('addtodo', function () {
		it('TODO Insert Should be successful', function () {
			var $scope = {};
			var timestamp = new Date().getTime();
			$scope.add_to_pouch = "TEST TODO";
			var controller = $controller('TodoCtrl', { $scope: $scope });
			$scope.addtodo();
			expect($scope.todos.not.toBe(false);;
		});	
	});

});