<?php 

    $path='';

    if(array_key_exists('PATH_INFO',$_SERVER)){
        
        $path=substr($_SERVER['PATH_INFO'],1);
        $arr=explode('/',$path);
        if(count($arr)==2){
            $path='pages/'.$arr[0].'/'.$arr[1];
        }else if(count($arr)==1){
             $path='pages/'.$arr[0];
        }
    }else{
        $path='pages/index';
    }

    include $path.'.html';

?>