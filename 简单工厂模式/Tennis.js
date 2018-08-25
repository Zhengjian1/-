// 网球基类
var Tennis = function() {
    this.intro = '每年有很多网球赛系列';
}

Tennis.prototype = {
    getMember: function() {
        console.log('每个队伍需要1名队员');
    },
    getBallSize: function() {
        console.log('网球很小');
    }
}