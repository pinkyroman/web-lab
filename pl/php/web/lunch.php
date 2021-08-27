<form method="POST" action="lunch.php">
    원하시는 번을 선택하세요:<br>
    <select name="lunch[]" multiple>
        <option value="바베큐 돼지고기">바베큐 돼지고기 번</option>
        <option value="닭고기">닭고기 번</option>
        <option value="연꽃씨">연꽃시 번</option>
        <option value="단팥">단팥 번</option>
        <option value="제비집">제비집 번</option>
    </select>
    <input type="submit" name="제출">
</form>

<p>
    <?php
    if (isset($_POST['lunch'])) {
        foreach ($_POST['lunch'] as $choice) {
            print "$choice 번을 골랐습니다.<br>";
        }
    } else {
        print "아무 번도 선택하지 않았습니다.<br>";
    }
    ?>
</p>