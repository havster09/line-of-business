(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductEditCtrl",["product","$state","productService",ProductEditCtrl]

        );

    function ProductEditCtrl(product,$state,productService) {
        var vm = this;
        vm.product = product;
        if(vm.product && vm.product.productId){
            vm.title = "Edit: "+vm.product.productName;
        }
        else{
            vm.title = "New Product";
        }

        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        }

        vm.submit = function(isValid){
            if(isValid){
                vm.product.$save(function(data){
                    toastr.success("Save Successful");
                });
            }
            else{
                toastr.error("Please address validation errors");
            }

        }

        vm.cancel = function(){
            $state.go('productList');
        }

        vm.addTags = function(tags){
            if(tags){
                var array = tags.split(",");
                vm.product.tags = vm.product.tags?vm.product.tags.concat(array):array;
            }
            else{
                alert("Please enter one or more tags separated by commas");
            }
        }

        /*Try Catch Version*/

        /*
        vm.addTags = function(tags){
            try{
                var array = tags.split(",");
                vm.product.tags = vm.product.tags?vm.product.tags.concat(array):array;
            }
            catch(e){
                alert("Please eneter tags");
            }
        }
        */

        vm.removeTag = function(idx){
            vm.product.tags.splice(idx,1);
        }

        vm.priceOption = "percent";

        vm.marginPercent = function(){ //set to a function so it is recalculated on each resolve
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        };


        /* Calculate the price based on a markup */
        vm.calculatePrice = function () {//set to a function to recalculate on each click
            var price = 0;

            if (vm.priceOption == 'amount') {
                price = productService.calculatePriceFromMarkupAmount(
                    vm.product.cost, vm.markupAmount);
            }

            if (vm.priceOption == 'percent') {
                price = productService.calculatePriceFromMarkupPercent(
                    vm.product.cost, vm.markupPercent);
            }
            vm.product.price = price;
        };

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }

    }
}());
