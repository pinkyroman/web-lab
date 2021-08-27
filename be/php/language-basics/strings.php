<?php
print 'this is a text';
print ' and this text is located on the same line.';
print 'another text that is printed on the same line ...';
echo 'echo also prints somethig.';

print 'the back slash character(\'\\\') is a escape-sequence character in PHP.';

print '

<ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>
';

print "a string with the double-quotation character(\") can include newline escape(\\n)!\nLike this!";

print <<<HTMLBLOCK
\r\n
<html>
\t<head>\n\t\t<title>Hello</title>\n\t</head>
\t<body>\n\t\t<h1>World</h1>\n\t</body>
</html>
\r\n
HTMLBLOCK;


// concat
$last_name = "Ozzy";
$first_name = "Osbourne";
print $last_name . " " . $first_name;

?>