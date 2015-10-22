(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",["product","productService","JobService",ProductDetailCtrl]);

    function ProductDetailCtrl(product,productService,JobService) {
        var vm = this;
        vm.product = product;
        vm.title = "Product Detail: "+ vm.product.productName;

        if(vm.product.tags){
            vm.product.tagList = vm.product.tags.toString();
        }

        if(vm.product.price && vm.product.cost){
            vm.marginPercent = productService.calculateMarginPercent(vm.product.price,vm.product.cost);
        }

        vm.job = JobService.getJob();
    }
}());
