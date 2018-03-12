<?php

header("charset=utf-8");
//echo"登陆成功";
    $username  = $_POST["username"];
    $password  = $_POST["password"];
    if ($username == "admin"&&$password == 123) {
        header("location:同步方式.html?param=1");

    }
    else
    {
        header("location:同步方式.html?param=2");
    }
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/12/20
 * Time: 9:47
 */