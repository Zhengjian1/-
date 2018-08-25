// 篮球基类
var Basketball = function() {
    this.intro = '篮球盛于美国';
}

Basketball.prototype = {
    getMember: function() {
        console.log('每个队伍需要5名队员');
    },
    getBallSize: function() {
        console.log('篮球很大');
    }
}
