/*
Description:
Write a program that takes two inputs - positions and locations and outputs positions to create. Positions and locations will each be an Object.

Variables:
Positions & Locations - (JS-Objects)

Keys for location: id(number), title(string)
Keys for position : id(number), location_id(number), remote(bool), status(string)

output: Object with two keys
1. Array - stores remote position
2. Array - of on-site filled positions

Rules:
1. if a position has an initial status of anything other than 'open', should not be created
2. A position being created should include an additional field of 'location_title', which is the value of the title in the location array
3. The status of a position to be created should be 'filled'
 */

var locations = {
  1:{"id":111, "title":"Test1"},
  2:{"id":222, "title":"Test2"}
};

var positions = {
  1:{"id":111, "location_id":111, "remote":false, "status": "open"},
  2:{"id":222, "location_id":222, "remote":true, "status":"open"},
}

class CreatePosition{

  constructor(positions, locations){
    this.positions = positions;
    this.locations = locations;
    this.remote = [];
    this.onsite = [];
    this.locationTitle = null;
  }

  createPos(){

    for(let key in this.positions){
      if(this.positions[key]['status'] == 'open'){

        this.getLocationTitle(key);

        if(this.locationTitle !== null){
          this.fillPos(key);
        }

      }
    }
  }

  fillPos(key) {

    if(this.positions[key]['remote']) {
      this.positions[key]['location_title'] = this.locationTitle;
      this.remote.push(this.positions[key]);

    }else {
      this.positions[key]['location_title'] = this.locationTitle;
      this.onsite.push(this.positions[key]);
    }
    this.positions[key]['status'] = 'filled';

  }

  getLocationTitle(key){

    let id = this.positions[key]['id'];

    for(let key in this.locations){
          if(this.locations[key]['id'] == id){
            this.locationTitle = this.locations[key]['title'];
          }
      }
  }

  return_position_created(){
    return {"remote": this.remote, "onsite":this.onsite};
  }

}


module.exports = CreatePosition;
