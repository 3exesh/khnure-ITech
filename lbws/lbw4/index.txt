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
        <p class="frontNameHeadline">
               Лабораторная работа №3
        </p> 
        <p class="frontName_SubInfo">
            Вариант №2 <br>
        </p>

	Тест 1:
	<?php
	echo "Hello, World!<br>"
	?>
	Тест 2:
	<?php echo 2+2 ?>

	
	
	<form>
		<p><input type="text" id="userName" placeholder="Введите имя"> 
		<input name= "saveLogin_btnClicked" type="button" value="Подтвердить" onclick="submit_BtnCliced()"></p>
		
	</form>

	<script>
	function submit_BtnCliced()
	{
		location.href = 'index.php?userName=' + document.getElementById("userName").value;
	}
	</script>

	<?php
		session_start();


		if (isset($_GET['userName']))
		{
			

			if (!($_GET['userName']==''))
			{
				echo 'Сохранено значение : ';
				setcookie('userName', $_GET['userName'], time()+15);
				$_SESSION['userName'] = $_GET['userName'];
			}else
			{
				echo 'Вы ничего не ввели';
			}

			echo $_GET['userName'];
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

	<a href="sesionEx.php">Страница проверки работы "startsesion"</a>
	<br>
	<br>
	<br>
	<br>
	Исходник в формате txt:
	<br>
	<p>
		index.php:
		<p>
			<a href="https://3exesh.github.io/khnure-ITech/lbws/lbw4/index.txt">Страница проверки работы "startsesion"</a>
		</p>
	</p>
	<p>
		sesionEx.php:
		<p>
			<a href="https://3exesh.github.io/khnure-ITech/lbws/lbw4/sesionEx.txt">Страница проверки работы "startsesion"</a>
		</p>
	</p>
	<br>
	<br>
	<br>
	<br>
	<br>
	<a href="https://3exesh.github.io/khnure-ITech/lbws/"> Вернуться к выбору лабораторных</a>
    </body>
</html>