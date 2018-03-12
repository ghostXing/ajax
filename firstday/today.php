<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/12/19
 * Time: 16:27
 */
$username = $_GET["username"];
$password = $_GET["password"];
if($username == "admin"&&$password == 123) {
    echo"1";
} else {
    echo"2";
}
?>