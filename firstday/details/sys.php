<?php
    $username = $_GET["username"];
    $password = $_GET["password"];
    if($username == "admin"&& $password == 123) {
        $flag = 1;
    } else {
        $flag = 2;
    }
    if($flag ==1) {
        echo "用户名".$username."|密码".$password."登陆成功";
    } else {
        echo "2";
    }
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/12/19
 * Time: 12:23
 */
?>