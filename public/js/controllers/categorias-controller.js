angular.module('lanchonete').controller('CategoriasController', function($scope, $http, $location) {
	$scope.categorias = [];

	$http.get('http://tecprime.com.br/api/categories')
	.success(function(retorno) {
		$scope.categorias = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.redirecionar = function(id) {
		$location.path('/produtos/' + id)
	}
});