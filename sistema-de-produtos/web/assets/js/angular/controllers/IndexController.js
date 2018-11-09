var productsSystem = angular.module('ProductsSystem',['ui.bootstrap','ngTable']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

productsSystem.controller('IndexController',function($scope,$window, $http, $uibModal){


    $scope.products = '';

    $scope.alert = '';

    $scope.show = false;


    var listProducts = function(){

        $http.get('/products',function(){
        }).then(function success(result) {
            $scope.products = result.data;
        }, function error(error) {

        });

    };

    $scope.open = function (methodType) {


        $scope.productsNameArray = [];

        angular.forEach($scope.products, function(product){
            if (!!product.selected) $scope.productsNameArray.push(angular.copy(product));
        });

        if(methodType === 'new'){
            templateUrl = '/products/new';
            $scope.title = 'Cadastrar';
        }else{
            templateUrl = '/products/edit/'+$scope.productsNameArray[0].id;
            $scope.title = 'Editar';
        }

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: templateUrl,
            controller: 'ModalInstanceCtrl',
            resolve: {
                titles: function () {
                    return $scope.title;
                },
                product: function () {
                    return  $scope.productsNameArray;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            listProducts();
        });

    };

    $scope.confirmRemove = function () {
        if ($window.confirm("Deseja mesmo deletar os produtos selecionados?")) {
            $scope.remove()
        }
    };


    $scope.remove = function () {

        $scope.productsNameArray = [];

        angular.forEach($scope.products, function(product){
            if (!!product.selected) $scope.productsNameArray.push(product.id);
        });

        var data = $.param({
            ids: $scope.productsNameArray
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/products/remove', data, config)
            .success(function (data, status, headers, config) {
                $scope.alert = data;
                $scope.show = true;
                listProducts();
            })
            .error(function (error) {
                console.log(error)
            });
    };


    listProducts();


});

productsSystem.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $http, titles, product) {

    $scope.product = product;

    $scope.create = function(){

        var listProducts = listProducts;

        if($scope.product.active){
            active = 1;
        }else{
            active = 0;
        }

        var data = $.param({
            code: $scope.product.code,
            description: $scope.product.description,
            balance: $scope.product.balance,
            price: $scope.product.price,
            active: active
        });

        console.log(data);

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/products/create', data, config)
            .success(function (data, status, headers, config) {
                $scope.alert = data;
                $scope.show = true;
                $uibModalInstance.dismiss('cancel');
            })
            .error(function (error) {
                console.log(error)
            });
    };

    $scope.edit = function(id){

        if($scope.product[0].active){
            active = 1;
        }else{
            active = 0;
        }


        var data = $.param({
            id: id,
            code: $scope.product[0].code,
            description: $scope.product[0].description,
            balance: $scope.product[0].balance,
            price: $scope.product[0].price,
            active: active
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/products/edit', data, config)
            .success(function (data, status, headers, config) {
                $uibModalInstance.dismiss('cancel');
            })
            .error(function (error) {
                console.log(error)
            });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});