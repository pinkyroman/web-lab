<?php
namespace Game;

class Character
{
    private $name;
    private $level;
    private $hp;
    private $mp;
    private $str;

    public function __construct(string $name, int $level, int $hp, int $mp, int $str)
    {
        $this->name = $name;
        $this->level = $level;
        $this->hp = $hp;
        $this->mp = $mp;
        $this->str = $str;
    }

    public function getName(): string
    {
        return "$this->name (레벨 $this->level)";
    }

    public function getHP(): int
    {
        return $this->hp;
    }

    public function attack(): int
    {
        print "$this->name 이(가) 공격을 했습니다!\n";
        $attack_point = $this->hp + $this->str;
        return $attack_point;
    }
}

class Goblin extends Character
{
    public function __construct()
    {
        parent::__construct("고블린", 3, 50, 20, 3);
    }

    public function attack(): int
    {
        return parent::attack() + 2;
    }
}

?>