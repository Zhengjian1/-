// 装饰者
var Decorator = function(input, fn) {
        // 获取事件资源
        var input = document.getElementById(input);
        // 判断事件是否绑定
        if(typeof input.onclick === 'function') {
                // 缓存事件源原有回调函数
                var oldClickFn = input.onclick;
                // 为事件源添加新的事件
                input.onclick = function() {
                        // 事件原有的回调函数
                        oldClickFn();
                        fn();
                }
        } else {
                input.onclick = fn;
        }
}