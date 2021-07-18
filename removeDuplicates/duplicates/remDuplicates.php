<?php

class RemovDuplicates {

  public function __construct($nums){
    $this->nums = $nums;
  }

  public function removeDuplicates(){

    $m = 0; // slow pntr

    for($i=1;$i<count($this->nums);$i++){

      // if fast pntr finds next uniq ele
      if($this->nums[$i] != $this->nums[$m]){
        $this->nums[++$m] = $this->nums[$i];
      }

    }
    return $m + 1;
  }
}
