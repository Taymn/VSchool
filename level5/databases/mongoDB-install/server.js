const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cluster0',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

// mongoose.connect(mongodb+srv://adamgt2003:Q5BWRLJEcXBee65Q@cluster0.mnr85c8.mongodb.net/?retryWrites=true&w=majority)