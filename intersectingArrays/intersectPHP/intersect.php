<?php

function intersect($arr1, $arr2){
  $map = new stdClass();
  $returnArr = [];

  foreach ($arr1 as $value) {

    if(!isset($map->{$value})){
        $map->$value = 1;
    }else{
      $map->$value++;
    }
  }

  foreach($arr2 as $val){

    if(isset($map->$val) && $map->{$val} >= 1){
      $returnArr[] = $val;
      $map->$val--;
    }
  }

  print_r($returnArr);

}

$rs = intersect([1,2,2,1], [2,2]);
echo'<pre>';print_r($rs);echo'</pre>';
