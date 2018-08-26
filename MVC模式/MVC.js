(function (window) {
    var MVC = {};
    // 模型模块
    var M = {};
    MVC.Model = {
            /**
             * 读取数据的方法
             * @str  读取数据层级路径
             * eg:
             *     M = {a: {b: {c: { d: 123}}}}
             *     MVC.Model.get('a.b.c.d')
             */
            get: function(str) {
                    var path = str
                        .replace(/^M\.|^\./, '')
                        .split('.');

                    var result = M;
                    for(var i = 0; i < path.length; i++) {
                        if(result[path[i]] === undefined) {
                           
                            return null;
                        }

                        result = result[path[i]];
                    }

                    return result;
        },
         /**
         * 更新或者添加数据的方法
         * @key      表示一个属性层级的路径
         * @value    表示值
         * eg:
         *          add('a.b.c', {d:111})
         *          M = {a: { b: { c: { d: 111}}}}
         */
        add: function(key, value) {
                 var path = key
                    .replace(/^M\.|^\./, '')
                    .split('.');

                 var result = M;
                  for(var i = 0 ; i < path.length - 1 ; i++) {
                           //
                           if(result[path[i]] !== undefined && typeof result[path[i]] !== 'object' || result[path[i]] === null) {
                                throw new Error( typeof result[path[i]] + '类型的数据不能添加属性' + result[path[i]] )
                           }

                           if(!result[path[i]]) {
                                result[path[i]] = {};
                           }
                            result = result[path[i]]
                  }
                  result[path[i]] = value;
                  return this;
          }
    }


    // 视图模块
    var V = {};
    MVC.View = {
                /**
                 *  添加视图的方法
                 *  @id     视图的id
                 *  @fn      视图的创建
                 */
                add: function (id, fn) {
                        V[id] = fn;
                        return this;
                },
                /**
                 * *
                 * 执行创建视图的方法
                 * @id    视图的id
                 */
                create: function(id) {
                        return  V[id] && V[id].call(MVC, MVC.Model, MVC.template);
                }
        }


    // 控制器模块
    var C = {};
    MVC.Controller = {
                    /**
                     * 添加控制器
                     * @id         控制器的id
                     *  @fn        控制器的方法
                    */
                    add: function(id, fn) {
                            C[id] = fn;
                            return this;
                    },
                    /**
                     * 初始化控制器
                     */
                    init: function() {
                            for(var i in C) {
                                C[i].call(MVC, MVC.Model, MVC.View);
                            }
                    }
          }


         /**
         * 格式化模板字符串
         * @param  {[type]} str    模板字符串
         * @param  {[type]} data  模板数据
         * @return                      格式化后的模板字符串
         */
        MVC.template = function (str, data) {
                return str.replace(/\{#([\w\.]+)#\}/g, function(match, $1) {
                        var path = $1.split('.');
                        var result = data;
                        for(var i = 0 ; i < path.length; i++) {
                                if(undefined === result[path[i]]) {
                                    return '';
                                }

                                result = result[path[i]];
                        }
                        return result;
                })
        }


        // 优化添加模型方法
        MVC.addModel = function(id, data) {
            MVC.Model.add(id, data);
            return this;
        }
        MVC.get = function(id) {
            return MVC.Model.get(id);
        }

        // 优化添加视图方法
        MVC.addView= function(id, fn) {
            MVC.View.add(id, fn);
            return this;
        }
        MVC.create = function(id) {
               // 为了在外界访问dom，我们可以将方法的结果返回
               return MVC.View.create(id)
        }

         // 优化添加控制器方法
        MVC.addCtrl = function(id, fn) {
            MVC.Controller.add(id, fn);
            return this;
        }

        // MVC.install = function() {
        //     // j加载完成
        //    $(function(){
        //         // 初始化所有控制器
        //         MVC.Controller.init();
        //    })
        // }

        // 也可以对jquery进行拓展
        // $.extend({
        //  template: MVC.template
        // })
    
    window.MVC = MVC;
})(window)











