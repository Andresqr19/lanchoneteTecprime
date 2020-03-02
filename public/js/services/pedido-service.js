angular.module('servicosLanchonete', ['ngResource'])
.factory('pedidoService', function($resource) {
    var service = {
        produtosPedido: []
    }
    service.comprar = function(produto){
        const produtoExistente = service.produtosPedido.find(p => p.id === produto.id);
        if (!produtoExistente) {
            const produtoPedido = angular.copy(produto)
            produtoPedido.quantidade = 1;
            produtoPedido.subTotal= produtoPedido.preco;
            service.produtosPedido.push(produtoPedido);
        } else {
            service.acrecentar(produtoExistente);
        }
    }

    service.acrecentar = function(produto){
        produto.quantidade++;
        produto.subTotal = produto.preco * produto.quantidade;
    };
    service.retirar = function(produto){
        produto.quantidade--;
        produto.subTotal = produto.preco * produto.quantidade;
        if(produto.quantidade <= 0){
            service.remover(produto.id);
        }
    };
    service.remover = function(id){
        var index = service.produtosPedido.findIndex(function(el){
            return el.id === id;
        });
        service.produtosPedido.splice(index,1);
    };
    service.finalizarPedido = function(){
        service.produtosPedido.splice(0);
    };

    return service
})