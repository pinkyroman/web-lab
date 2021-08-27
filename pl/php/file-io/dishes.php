<?php
$fh = fopen("dishes.csv", "rb");
$spicies = ["아니오", "예"];
foreach ($spicies as $k => $v) {
    print "key: $k, value: $v<br>";
}
?>

<table>
    <tr>
        <th>메뉴</th>
        <th>가격</th>
        <th>매움</th>
    </tr>
    <?php
    while ((! feof($fh)) && ($info = fgetcsv($fh))) {
        print <<< _MENU_ITEM_
        <tr>
            <td>$info[0]</td>
            <td>$info[1]</td>
            <td>{$spicies[(int)$info[2]]}</td>
        </tr>
        _MENU_ITEM_;
    }
    ?>
</table>
