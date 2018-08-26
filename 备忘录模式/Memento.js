// 伪代码
// page备忘录类
var Page = function(){
        // 信息缓存对象
        var cache = {}l;
        /**
        * 主函数
        *  参数page页码
        *  参数fn  成功回调函数
        **/
        return function(page, fn) {
            // 判断页面数据是否在缓存中
            if(cache[page]) {
                // 恢复到该页状态， 显示该页内容
                showPage(page, cache[page]);
                fn && fn()
            } else {
                $.post('./data/getNewsData.php', {
                    page: page
                }, function(res) {
                    // 成功返回
                    if(res.code === 200) {
                        showPage(page, res.data);
                        // 将该页数据缓存到缓存中
                        cache[page] = res.data;
                        fn && fn();
                    }
                })
            } else {
                // 异常处理
            }
        }
}