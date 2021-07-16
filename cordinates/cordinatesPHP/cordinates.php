<?php


/*
Description:

Your task will be to write a program that takes two inputs - positions and locations and outputs positions to create. positions and locations will each be an Array (or a numerically indexed array in PHP and a list in Python). Each position and each location is an Object (PHP - Array, Python - dictionary).

Variables:

Positions & Locations - (PHP-Array), (Python-List), (PHP-Object), (Python-dictionary)

Keys for location: id(number), title(string)
Keys for position : id(number), location_id(number), remote(bool), status(string)

Expec output: Object with two keys
1. Array - stores remote position
2. Array - of on-site filled positions

Business Rules:

1. if a position has an initial status of anything other than 'open', should not be created
2. A position being created should include an additional field of 'location_title', which is the value of the title in the location array
3. The status of a position to be created should be 'filled'

 */

 $locations = array(
  array("id" => 111,"title" => "Test1"),
  array("id" => 222,"title" => "Test2"),
  array("id" => 333,"title" => "Test3"),
  array("id" => 444,"title" => "Test4"),
  array("id" => 555,"title" => "Test5"),
  array("id" => 666,"title" => "Test6"),
  array("id" => 777,"title" => "Test7"),
 );

 $positions = array(
  array("id" => 111,"location_id" => 111,"remote" => false,"status" => "open"), //
  array("id" => 222,"location_id" => 222,"remote" => true,"status" => "closed"),
  array("id" => 333,"location_id" => 333,"remote" => true,"status" => "closed"),
  array("id" => 444,"location_id" => 444,"remote" => true,"status" => "closed"),
  array("id" => 555,"location_id" => 555,"remote" => true,"status" => "open"), //
  array("id" => 666,"location_id" => 666,"remote" => true,"status" => "closed"),
  array("id" => 777,"location_id" => 777,"remote" => true,"status" => "open"),
  array("id" => 999,"location_id" => 999,"remote" => true,"status" => "open"),
);


class CreatePosition{

    public function __construct(){

      $this->createdPositions = new stdClass();
      $this->remote = [];
      $this->onsite = [];
      $this->errorPositions = [];
      $this->positions = null;
      $this->locations = null;
    }

    public function getLocationPositions($locations, $positions){
      $this->positions = $positions;
      $this->locations = $locations;
    }

    function createPos(){

     foreach($this->positions as $pos){

       if(strtolower($pos['status']) == "open"){

          $title = $this->getLocationTitle($pos['location_id']);

           if(!empty($title['title'])){

             $pos['position_title'] = $title['title'];
             if(strtolower($pos['remote'])){
                 $this->remote[] = $pos;

              }else{
                $this->onsite[] = $pos;
              }

           }else{
             $this->errorPositions[] = $pos;
           }

        }
      }
    }

    function getLocationTitle($location_id){
      $title = ['title' => ''];

      foreach($this->locations as $loc){
         if($loc['id'] == $location_id){
           $title['title'] =  $loc['title'];
         }
      }
      return $title;
    }


    function returnPositions(){
      $this->createdPositions->remote = $this->remote;
      $this->createdPositions->onsite = $this->onsite;
      return $this->createdPositions;
    }

}

$pos = new CreatePosition();
$pos->getLocationPositions($locations, $positions);
$pos->createPos();
$createdPos = $pos->returnPositions();

echo'<pre>'; print_r($createdPos); echo'</pre>';
