<?php
/*向客户端返回一段JSON数据*/
header('Content-Type: application/json');
$arr = [
    ['ename'=>'King','salary'=>6000,'birthday'=>23413434234],
    ['ename'=>'Scott','salary'=>8000,'birthday'=>3233434234],
    ['ename'=>'Tiger','salary'=>9000,'birthday'=>83763434234],
    ['ename'=>'Smith','salary'=>7000,'birthday'=>8822434234]
];

$str = json_encode($arr);
echo $str;
?>