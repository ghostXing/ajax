//自己封装的框架
function $$() {
}

$$.prototype = {
    //使用该方法前，引入arttemplate.js第三方框架。
    //字符串拼接
    strTemplate: function (example, data) {
        var render = template.compile(example);
        return render(data);
    },
    //html拼接
    htmlTemplate: function (templateId, data) {
        return template(templateId, data)
    },
    //replace高级替换用法
    formatString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return data[key] === undefined ? "" : data[key];
        })
    },
    //id选择器
    $$: function (id) {
        return document.getElementById(id);
    },
    //对象拷贝
    extend: function (target, object) {
        for (var key in object) {
            target[key] = object[key];
        }
        return target;
    },
    //拷贝多个对象的属性
    extendMany: function () {
        var length = arguments.length, i = 0;
        if (length == 0 || length == 1) {
            return;
        } else {
            var target = arguments[i];
            i++;
        }
        for(;i < length; i++) {
            for( var key in arguments[i]) {
                target[key] = arguments[i][key];
            }
        }
        return target;
    },
    //查询字符串改为json形式
    queryString: function (data) {
        var str = data.substring(1);
        var arr = str.split("&");
        var json = {};
        for( var i = 0; i < arr.length; i++) {
            var num = arr[i].indexOf("=");
            var key = arr[i].substring(0,num);
            var value = arr[i].substring(num+1);
            json[key] = value;
        }
        return json;
    }
}
var $$ = new $$();