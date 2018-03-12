<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $apple="苹果";
        $param = $_GET["param"];
        if($param ==1) {
            echo "<div>".$apple."</div>";
        }
        else if($param ==2) {
            echo"<div>香蕉</div>";
        }
        ?>
</body>
</html>