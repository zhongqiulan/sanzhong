<?php 
    header("Content-type:text/html;charset=utf-8");

    $path = '';
    if(array_key_exists('PATH_INFO',$_SERVER)) {
        $path = $_SERVER['PATH_INFO'];
        //截取字符串
        $path = substr($path,1);
        $arr = explode('/',$path);
        if(count($arr) == 2) {
            $path = 'views/'.$arr[0].'/'.$arr[1];
        }else if(count($arr) == 1) {
            $path = 'views/page/'.$arr[0];
        }
    }else {
        $path = 'views/page/index';
    }
   strpos($path,'.html')?include $path: include $path.'.html';
    // include $path.'.html';
?>
