<?php
if ('POST' == $_SERVER['REQUEST_METHOD']) {
    print<<<_HTML_
<h1>Server Info</h1>
<p>
SERVER_NAME: $_SERVER[SERVER_NAME]<br>
SERVER_SOFTWARE: $_SERVER[SERVER_SOFTWARE]<br>
DOCUMENT_ROOT: $_SERVER[DOCUMENT_ROOT]<br>
PHP_SELF: $_SERVER[PHP_SELF]<br>
QUERY_STRING: $_SERVER[QUERY_STRING]><br>
PATH_INFO: $_SERVER[PATH_INFO]><br>
REQUEST_URI: $_SERVER[REQUEST_URI]<br>
REMOTE_ADDR: $_SERVER[REMOTE_ADDR]<br>
REMOTE_HOST: $_SERVER[REMOTE_HOST]<br>
HTTP_USER_AGENT: $_SERVER[HTTP_USER_AGENT]<br>
</p>
_HTML_;
    print $_POST['my_name']. "님 안녕하세요";
} else {
    print<<<_HTML_
<form method="post" action="$_SERVER[PHP_SELF]">
이름: <input type="text" name="my_name">
<br>
<input type="submit" value="인사">
</form>
_HTML_;
}

?>