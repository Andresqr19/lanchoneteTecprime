angular.module('lanchonete', ['ngRoute', 'ngResource', 'servicosLanchonete'])
	.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider.when('/categorias', {
            templateUrl: 'partials/categorias.html',
			controller: 'CategoriasController'
		});
        
		$routeProvider.when('/produtos/:id', {
            templateUrl: 'partials/produtos.html',
			controller: 'ProdutosController'
        });
        $routeProvider.when('/pedidos', {
            templateUrl: 'partials/pedidos.html',
            controller: 'PedidoController'
		});
        
		$routeProvider.otherwise({redirectTo: '/categorias'});
	});