<?php
$count = 0;
while ($count < 10) {
    printf("repeat %d times ...\n", $count++);
}
print "done.\n\n";

print '<select name="people">';
for ($i = 0; $i < 10; $i++) {
    print "\n    <option>Person $i</option>";
}
print "\n</select>\n";

?>