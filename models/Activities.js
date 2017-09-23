const mongose = require("mongoose")

const newActivitySchema = new mongoose.Schema ({
  activityName: {type:String, required: true},
  unitMeasured: {type:String, require: true},
  stats: [{
    date: {type:String, required: true},
    record: {type:Number, required: true}
  }]
})

const newActivity = mongoose.model("newActivity", newActivitySchema)

module.exports = newActivity
