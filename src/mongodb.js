const mongoose = require("mongoose");
const { stringify } = require("querystring");
mongoose.connect("mongodb://127.0.0.1:27017/hritik_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })
    const contactSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        subject: {
          type: String,
          required: true
        },
        message: {
          type: String,
          required: true
        },
      });
      
      const Collection1 = mongoose.model("Collection1", contactSchema);
      module.exports = Collection1;