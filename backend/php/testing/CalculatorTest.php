<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

include "./calculator.php";

final class CalculatorTest extends TestCase {
    public function testWithAdd() {
        $calc = new Calculator();

        $a = 5;
        $b = 10;
        $expected = $a + $b;
        $actual = $calc->add($a, $b);
        $this->assertEquals($expected, $actual);
    }
}
?>