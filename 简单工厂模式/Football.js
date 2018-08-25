// 足球基类
var Football = function() {
    this.intro = '足球在世界范围内很流行';
}

Football.prototype = {
    getMember: function() {
        console.log('每个队伍需要11名队员');
    },
    getBallSize: function() {
        console.log('足球很大');
    }
}