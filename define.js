(function() {
    if(!window.console){
        window.console = {
            log:function(){},
            error:function(){}
        }
    }
    var modules = {};
    var require = function(name) {
        if(modules[name]){
            return modules[name].exports
        }
        console.error('module "' + name + '" is miss');
        return null;
    }

    window.define = function(name, fn) {
        if(!name){
            console.error('define 参数不能为空')
            return;
        }
        if(!fn){
            fn = name;
            name = null;
        }
        var obj = {
            exports : {}
        };
        fn.apply(window, [require, obj, obj.exports]);
        if(name){
            modules[name] = obj;
        }
    }
}());
