/*ת����Ʒ*/
function transformProduct(data){
    var product =  new Product()
    product.name = data.name;
    product.name=data.name;
    product.description=decodeURI(data.description)
    product.normalPrice=data.price;
    product.youhuijia=data.youhuijia;
    product.buySum=data.sum;
    product.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]
    return product
}

/*ת����Ʒ�б�*/
function transformProducts(data){
    var products =[]
    for(var i=0;i<data.length;i++){
        var product = transformProduct(data[i])
        products.push(product)
    }
    return products
}

/*ת�����ﳵ*/
function transformCart(data){
    var cart =  new Cart()
    cart.sum=data.sum;
    cart.allPrice=data.allprice;
    cart.products = transformProducts(data.products)
    return cart;
}

var cart;
var product;
//ҳ���ҵ���߼�
$(document).ready(function(){
    $$.myAjax('http://localhost/mall/object/product.json',function(e){
        var json = JSON.parse(e);
        product = transformProduct(json)
        /*ʹ�ö����еķ�������*/
        product.bindDOMDetail()
        product.bindDOMImage()

        /*���¼�*/
        $('#btnaddcart').click(function(){
            /*���ﳵ����һ����Ʒ*/
            cart.products.push(product)
            ///*���¹��ﳵ - ���°󶨹��ﳵ*/
            /*�������װ������Ϳ��ܲ��������ظ�*/
            cart.bindBasic()
            cart.bindList()
            $(window).scrollTop(0);
        });

    });

    $$.myAjax('http://localhost/data/object/cart.json',function(e){
        var json = JSON.parse(e);
        cart = transformCart(json)
        /*ʹ�ö����еķ�������*/
        cart.bindBasic()
        cart.bindList()
    });


});