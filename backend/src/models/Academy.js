const mongoose = require('mongoose');
const Picture = require('./Picture').schema;



const AcademySchema = new mongoose.Schema({
    name: String,
    telephone_number: String,
    address: String,
    email: String,
    location: String,
    nearby_amenity: String,
    capacity: Number,
    rating: Number,
    academy_pictures: [Picture]    
});


module.exports = mongoose.model('Academy', AcademySchema);