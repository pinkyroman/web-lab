<?php
function display_array($a)
{
    foreach ($a as $key => $value) {
        print "$key: $value\n";
    }
    printf("length of the array = %d\n", count($a));
}

$vegetables = array('corn' => 'Yellow',
                    'beet' => 'Red',
                    'carrot' => 'Orange');
print "<VEGETABLES>\n";
display_array($vegetables);

$dinner =  [0 => 'Sweet corn',
            1 => 'Lemon chicken',
            2 => 'Mushroom'];
print "<DINNER>\n";
display_array($dinner);

$complex = [ 0 => 'zero',
            'two' => 2 ];
print "<COMPLEX>\n";
display_array($complex);

// number-key array
$fruits = [ 'apple', 'orange', 'banana', 'melon' ];
print "<FRUITS>\n";
display_array($fruits);

$fruits[] = 'pineapple';
$fruits[] = 'lemon';
display_array($fruits);

$vocals[] = 'ozzy';
$vocals[] = 'alice';
$vocals[] = 'tom';
display_array($vocals);

foreach($vocals as $vocal) {
    print "$vocal wants to sing!\n";
}

for($i = 0, $num_vocals = count($vocals); $i < $num_vocals; $i++) {
    print "$vocals[$i] need a micophone !!!\n";
}

$students = [];
$students[] = 'james';
$students[] = 'robert';
display_array($students);

$meals = [
    '아침' => '호두 번',
    '점심' => '캐슈너트와 양송이 버섯',
    '간식' => '말린 오디',
    '저녁' => '칠리 소스 가지 볶음'
];

print "<table>\n";
foreach($meals as $key => $value) {
    print "<tr><td>$key</td><td>$value</td></tr>\n";
}
print "</table>\n";

$orders[] = "first";
$orders[4] = "second";
$orders[] = "third";
$orders[] = "fourch";

foreach($orders as $k => $v) {
    print("$k: $v\n");
}

for($i = 0; $i < 7; $i++) {
    if (array_key_exists($i, $orders)) {
        print("$i: $orders[$i]\n");
    }  else {
        print "Key:$i doesn't exist in this array.\n";
    }
}

printf("\$vegetables has the fowllowing keys: %s\n", join(", ", array_keys($vegetables)));
// printf("\$vegetables has the following values: %s\n", join(" ,", array_values($vegetables)));
printf("\$vegetables has the following values: %s\n", implode(" | ", array_values($vegetables)));

if (!in_array('Blue', $vegetables)) {
    print "It's so said that there isn't 'Blue' color in \$vegetables!\n";
}

$target = "banana";
print "in searching of $target ...\n";
if ($result = array_search($target, $fruits)) {
    print "found: the key for the value($target) is '$result'.\n";
} else {
    print "not found!\n";
}

print "아침 식사로 '$meals[아침]'을 먹었더니, 벌써 배고파요!\n";
print "the color of 'carrot' is $vegetables[carrot].\n";

$favorites = [
    "Ozzy Osbourne" => "Bark at the Moon",
    "Yngwie J. Malamsteen" => "Odyssey",
    "Dio" => "Dream Evil",
    "White Snake" => "1987",
    "Van Halen" => "5150",
    "AC/DC" => "Flick of the switch",
    "Helloween" => "The keeper of the seven keys Part I and II",
    "Guns and Roses" => "Appetite for Destruction",
];

$artist = "Yngwie J. Malamsteen";
print "My favorite album of $artist is {$favorites['Yngwie J. Malamsteen']}.\n";

print "<FAVORITES>\n";
display_array($favorites);

$el = $favorites[$artist];
print "remove an element: '$el' in the array ...\n";
unset($favorites[$artist]);
display_array($favorites);

$values = "농어, 잉어, 꼬치고기, 가자미";
$fish_list = explode(", ", $values);
print("\$values has been exploded as ...\n");
display_array($fish_list);

print "\n\n\n\n\n\n\nBEFORE SORTING:\n";
display_array($favorites);

print "\nAFTER SORTING by Key:\n";
$groups = array_keys($favorites);
sort($groups);
for($i = 0, $groups_length = count($groups); $i < $groups_length; $i++) {
    $group_name = $groups[$i];
    printf("$group_name: $favorites[$group_name]\n");
}

print "\nAFTER SORTING by Value:\n";
asort($favorites);
display_array($favorites);

print "\nAFTER SORTING by Key again(but using ksort):\n";
ksort($favorites);
display_array($favorites);

print "\nREVERSE-SORTING by Value(arsort):\n";
arsort($favorites);
display_array($favorites);

print "\nREVERSE-SORTING by Key(krsort):\n";
krsort($favorites);
display_array($favorites);



?>
