<?php
$username = $_GET["username"];
$password = $_GET["password"];
if($username == "admin" && $password == 123) {
    echo '{"name":"aizibing","age":17 }';
} else {
    echo "2";
}
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/12/21
 * Time: 16:34
 */