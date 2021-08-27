<form method="POST" action="catalog.php">
    <input type="text" name="product_id">
    <select name="category">
        <option value="ovenmitt">냄비받침</option>
        <option value="fryingpan">프라이팬</option>
        <option value="torch">주방토치</option>
    </select>
    <input type="submit" name="제출">
</form>
제출된 값은 다음과 같습니다:

<ul>
    <li>
        product_id: <?php print $_POST['product_id'] ?? '' ?>
    </li>
    <li>
        <!-- ?? 연산자(php v7)를 사용하지 않을 경우: -->
        category: <?php
            $c = "";
            if (isset($_POST['category'])) {
                $c = $_POST['category'];
            }
            print $c
            ?>
    </li>
</ul>