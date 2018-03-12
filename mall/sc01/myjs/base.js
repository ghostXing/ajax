//基类
function Base() {
    this.name = '';
    this.description = '';
    this.normalPrice = 300;
    this.preferentialPrice = 150;
    this.sum = 100;
    this.image = [
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'},
        {small:'images/js.jpg',big:'images/js.jpg'}
    ];
}
Base.prototype = {
    buy: function () {},
    groupBuy: function () {},
    init: function () {},
    bindDom: function () {},
    bindImage: function () {
        var str = "";
        str+= '{{each image as value i}}';
        str+='<li>';
        str+='<img class="etalage_thumb_image" src="{{value.small}}" class="img-responsive" />';
        str+='<img class="etalage_source_image" src="{{value.big}}" class="img-responsive" />';
        str+='</li>';
        str+= '{{/each}}';
        $('#etalage').html($$.strTemplate(str,this));
        $('#etalage').etalage({
            thumb_image_width: 250,
            thumb_image_height: 300,
        });
    },
    addToCart: function () {},
    bindEvent: function () {}
}

