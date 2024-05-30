 <?php
    $user = 'root';
    $password = 'root';
    $db = 'diplom-bd';
    $host = 'localhost';
    $port = 8889;
    
    $link = mysqli_init();
    $success = mysqli_real_connect(
        $link,
        $host,
        $user,
        $password,
        $db,
        $port
 );     
    $login = filter_var(trim($_POST ['login']),
    FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST ['password']),
    FILTER_SANITIZE_STRING);
    $tel = filter_var(trim($_POST ['tel']),
    FILTER_SANITIZE_STRING);
   
    if(mb_strlen($login) < 5 || mb_strlen($login) > 50 ){
        echo "Недопустимая длинна логина";
        exit();
    }
    else if(mb_strlen($pass) < 5 || mb_strlen($lpass) > 50 ){
        echo "Недопустимый пароль (от 5 до 50 символов)";
        exit();
    }
    else if(mb_strlen($tel) < 10 || mb_strlen($tel) > 11 ){
        echo "Недопустимый номер";
        exit();
    }

    $pass = md5($pass. "5743874sdf");

    $mysql = new mysqli('localhost', 'root', 'root', 'diplom-bd');
    $mysql ->query("INSERT INTO `register` (`login`, `password`, `tel`)
    VALUES ('$login', '$pass', '$tel')");
    $mysql->close();

    header('Location: /');
?> 
