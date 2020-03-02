angular.module('lanchonete').controller('PedidoController', function($scope,pedidoService) {
    
    $scope.pedidos = [];
    $scope.mensagem = '';

    $scope.pedidos = pedidoService.produtosPedido;

    $scope.totalPedido = function(){
        var total =0;
        $scope.pedidos.forEach(element => {
            total= total+element.subTotal;

        });
        return total;
    }

    $scope.voltar = function(){
        window.history.back();
    };

    $scope.formatNumber = function(val){
        return new Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'})
        .format(val);
    };
    $scope.acrecentar = function(produto){
        pedidoService.acrecentar(produto);
    }
    $scope.retirar = function(produto){
        pedidoService.retirar(produto);
    }
    $scope.remover = function(id){
         pedidoService.remover(id);
    }
    $scope.finalizarPedido = function(){
        pedidoService.finalizarPedido();
        $scope.mensagem = 'Pedido enviado com sucesso';

   }
});