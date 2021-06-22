// const mongoose = require('mongoose');

// const PictureSchema = new mongoose.Schema({
//     picture : String
// })

// const AcademySchema = new mongoose.Schema({
//     name: String,
//     telephone_number: String,
//     address: String,
//     email: String,
//     location: String,
//     nearby_amenity: String,
//     capacity: Number,
//     rating: Number,
//     academy_pictures: [PictureSchema]
// }, {
//     toJson: {
//         virtuals:true
//     }
    
// });

// AcademySchema.academy_pictures.forEach(function(schema){
//     schema.virtuals("picture_url").get(function(){return `http://localhost:8000/files/${this.picture}`})
// })

// module.exports = mongoose.model('Academy', AcademySchema);