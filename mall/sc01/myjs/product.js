function Cloth() {
    Base.call(this, arguments);
    this.colors = ["红色", "蓝色", "黑色"];
    this.sizes = [26, 27, 28, 29, 30, 31, 32, 33];
}
Cloth.prototype = new Base();
Cloth.prototype.buy = function () {
};
Cloth.prototype.addToCart = function () {
};
Cloth.prototype.bindDom = function () {
    $("#pname").html(this.name);
    $("#buyCount").html(this.sum);
    $("#price").html(this.price);
    $("#groupPrice").html(this.preferentialPrice);
    $("#description").html(this.des);
};
Cloth.prototype.bindSize = function () {
    var that = this;
    var str = '';
    for( var i = 0; i < that.sizes.length; i++ ) {
        str += '<li><a href="#">'+that.sizes[i]+'</a></li>';
    }
    $(".sizes").append($(str));
};
Cloth.prototype.bindColor = function () {
    var that = this;
    var str = "";
    for( var i = 0; i < that.colors.length; i++ ) {
        str += '<li><a href="#">'+that.colors[i]+'</a></li>';
    }
    $(".colors").append($(str));
};
Cloth.prototype.init = function () {
    this.bindSize();
    this.bindColor();
    this.bindImage();
};