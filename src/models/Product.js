const moongose = require ('mongoose');
const moongosePaginate = require('mongoose-paginate');

const ProductSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(moongosePaginate);

moongose.model('Product', ProductSchema);