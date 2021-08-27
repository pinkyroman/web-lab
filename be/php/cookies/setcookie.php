<?php
setcookie("userid", "ralph", time() + 60 * 60); // 1시간 후 삭제
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 쿠키 삭제
    setcookie("userid", "");
    print "now, it's deleted. try again to confirm that.\n";
}
?>
<html>
    <head>
        <title>Using Cookies</title>        
    </head>

    <body>
        a PHP block containing setcookie() comes before any HTML.
        <br>
        Hello, <?= $_COOKIE["userid"] ?>!
        <br>
        <form method="POST" action="<?= $_SERVER['PHP_SELF'] ?>">
            <input type="submit" vluae="쿠키 삭제">
        </form>
    </body>
</html>