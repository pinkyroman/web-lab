<?php 
class DishesDB {
    private static $id;
    private $connection_string;
    private $user;
    private $password;
    private $db;

    public function __construct($conn, $user, $password) {
        $this->connection_string = $conn;
        $this->user = $user;
        $this->password = $password;
        DishesDB::$id = 0;
    }

    public function connect() {
        $this->db = new PDO($this->connection_string, $this->user, $this->password);
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $this->dropTable();
        $this->createTable();
    }

    protected function dropTable()
    {
        $result = $this->db->exec("drop table dishes");
        $this->printIfPdoError($result, "테이블 삭제");
    }

    protected function createTable() {
        $result = $this->db->exec("CREATE TABLE dishes (
            dish_id INT,
            dish_name VARCHAR(255),
            price DECIMAL(4,2),
            is_spicy INT
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8");

        $this->printIfPdoError($result, "테이블 생성");
    }

    protected function printIfPdoError($result, $task) {
        if ($result === false) {
            $error = $this->db->errorInfo();
            print "[$task 실패]\n" . "- SQL Error: {$error[0]}\n- DB Error: {$error[1]}\nMessage: {$error[2]}\n";
        }
    }

    public function addDish(string $name, float $price, int $is_spicy) {
        $id = DishesDB::$id++;
        $result = $this->db->exec("INSERT INTO dishes (dish_id, dish_name, price, is_spicy)
                         VALUES ($id, '$name', $price, $is_spicy)");
        $this->printIfPdoError($result, "데이터 추가");
    }
}

?>