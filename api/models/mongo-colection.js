'use strict';

class Model {

  constructor(schema){
    this.schema = schema;
  };

  create(record){
    let newRecord = new this.schema(record);
    return newRecord.save(); 
  };

  read(id){
    // .find()
    let query = id ? {id} : {};
    return  this.schema.find(query);
  };

  update(id, record){
    return this.schema.findByIdAndUpdate(id, record, {new: true});
  };

  destroy(id){
    return this.schema.findByIdAndDelete(id)
  };

};

module.exports = Model;