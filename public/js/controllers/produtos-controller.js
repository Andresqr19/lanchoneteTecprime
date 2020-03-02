angular.module('lanchonete').controller('ProdutosController', function($scope, $http, $routeParams, pedidoService, $location) {
    $scope.produtos=[];

    $scope.buscar = function(id) {
        $http.post('http://tecprime.com.br/api/products', {
            category: id
        })
        .success(function(response) {
            $scope.produtos = response;
            $scope.mensagem = 'Foto cadastrada com sucesso';
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível cadastrar a foto';
        })
    };

    $scope.formatNumber = function(val){
        return new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'})
        .format(val);
    };

    $scope.comprar = function(produto){
        pedidoService.comprar(produto);
        
        $location.path( "/pedidos" );
    }

    $scope.buscar($routeParams.id);

});
