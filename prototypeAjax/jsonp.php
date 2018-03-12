<?php
$callBack = $_GET["_jsonp"];
$data = array("zhangsan","李四","zaoiqan");
//下面这里错了
echo $callBack."(".json_encode($data).")";

/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/12/21
 * Time: 19:44
 */
?>