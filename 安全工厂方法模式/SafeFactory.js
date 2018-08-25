// 安全模式创建的工厂
var Factory = function(type, content) {
    if(this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function(content) {
        this.content = content;
        (function(content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    JavaScript: function(content) {
        this.content = content;
        (function(content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    php: function(content) {
        this.content = content;
        (function(content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content)
    }
}