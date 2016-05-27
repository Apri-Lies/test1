requirejs.config({
    baseUrl: '/test',
    paths: {
        jquery:'js/jquery-1.11.3'
        /*less: 'js/less',*/
        /*test:'js/test'*/
    }
});
requirejs(["jquery"/*,"test","less"*/],function($,test,less){
});