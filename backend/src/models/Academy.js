const mongoose = require('mongoose');
const Picture = require('./Picture').schema;



const AcademyProgramSchema = new mongoose.Schema({
    program_name: String,
    program_type: {
        type: String,
        enum: ['WEEKLY', 'FIXED']
    },
    unit_price:[{
        period: Number,
        unit_price: Number
    }]

})

const AcademySchema = new mongoose.Schema({
    name: String,
    telephone_number: String,
    address: String,
    email: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    nearby_amenity: String,
    rating: {type: Number, min: 0, max: 5},
    programs:[AcademyProgramSchema],
    academy_pictures: [Picture]    
});


module.exports = mongoose.model('Academy', AcademySchema);