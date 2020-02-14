<!DOCTYPE html>
<html> 


    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title> 
            Лабораторная работа №4 - Отработка Даций В.В. КИУКИ-17-2
        </title>
		<link rel="stylesheet"         href="https://3exesh.github.io/khnure-ITech/lbws/res/baseStyleSheet.css">
    </head> 


    <body class="lbw_pg"> 
        </form>
            <form name="deleteSession" method="post" action="sesionEx.php">
            <input name= "saveLogin_btnClicked" type="submit" value="Удалить данные сессии" ></p>
        </form>
        <br>

    <?php
        session_start();


        function first()
        {
        
            echo "Вы удалили данные сессии";
            session_unset();
        }

        if ( isset ($_POST['saveLogin_btnClicked']) )
        {
            first();
        }



        
 
        if (!$_SESSION) 
        {
            echo "<br>";
            echo "Session id не зарегистрирован";
        }else
        {
            echo "<br>";
            echo "Session id \"userName\" = ";
            echo $_SESSION['userName'];
        }


    ?>

    <br>
    <br>
    <br>
    <a href="http://37.57.59.199:8080/"> Вернуться к текущей лабораторной</a>
	<a href="https://3exesh.github.io/khnure-ITech/lbws/"> Вернуться к выбору лабораторных</a>
    <br>
    </body>

</body> 
