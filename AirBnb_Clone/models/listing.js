const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    type: {
      url: String,
      filename: String,
    },
    default: {
      url: "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?q=80&w=1170&auto=format&fit=crop",
      filename: "listingimage",
    },
  },


  price: {
    type: Number,
    required: true,
  },

  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema);
