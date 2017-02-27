var app = angular.module('app',[]);
$(function(){
    var init = {
        menu : $("#menu"),
        showMenu:function(){
            var that = this;
            $(".meun").click(function(){
                that.menu.addClass('on');
            });
        },
        closeMenu:function(){
            var that = this;
            $(".close").click(function(){
                that.menu.removeClass('on');
            })
        }
    };
    init.showMenu();
    init.closeMenu();
});

app.controller('Login',function($scope){
    var data = $scope.data = {};
    data.on=1;
    data.change = function(index){
        data.on = index;
    };
});
































