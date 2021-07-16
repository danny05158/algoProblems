var chai  = require('chai'),
expect = chai.expect,
should = chai.should();

const CreatePosition = require('./cordinates')

describe('Test CreatePosition class', () => {

  var locations = {
    1:{"id":111, "title":"Test1"},
    2:{"id":222, "title":"Test2"}
  };

  var positions = {
    1:{"id":111, "location_id":111, "remote":false, "status": "open"},
    2:{"id":222, "location_id":222, "remote":true, "status":"open"},
  }

  const pos = new CreatePosition(positions, locations);

  it('expects pos to be an object', async () => {
    pos.should.be.an('object');
  })

  pos.createPos();
  let created_positions = pos.return_position_created();

  it('should have property of remote and length of 1', async () => {
    created_positions.should.have.property('remote').with.lengthOf(1);
  })

  it('should have property of onsite and length of 1', async () => {
    created_positions.should.have.property('onsite').with.lengthOf(1);
  })

});
