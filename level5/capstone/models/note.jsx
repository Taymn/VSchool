const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    content:  {
        type: String,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: String,
    tags: [
        "#instagood",
        "#photooftheday",
        "#beautiful",
        "#love",
        "#fashion",
        "#happy",
        "#cute",
        "#tbt",
        "#followme",
        "#like4like",
        "#picoftheday",
        "#selfie",
        "#summer",
        "#friends",
        "#fun",
        "#smile",
        "#travel",
        "#instadaily",
        "#style",
        "#fitness",
        "#nofilter",
        "#instalike",
        "#foodporn",
        "#instamood",
        "#follow",
        "#igers",
        "#amazing",
        "#bestoftheday",
        "#swag",
        "#life",
        "#beauty",
        "#sun",
        "#vscocam",
        "#beach",
        "#cool",
        "#music",
        "#party",
        "#night",
        "#ootd",
        "#instacool",
        "#instapic",
        "#family",
        "#dog",
        "#cat",
        "#sunset",
        "#sky",
        "#instafood",
        "#photo",
        "#instafollow",
        "#likeforlike",
        "#inspiration",
        "#instalove",
        "#follow4follow",
        "#fitfam",
        "#instagood",
        "#workout",
        "#motivation",
        "#instafashion",
        "#goals",
        "#quotes",
        "#art",
        "#instaquote",
        "#nature",
        "#success",
        "#instahealth",
        "#girl",
        "#boy",
        "#baby",
        "#photography",
        "#photochallenge",
        "#instapicture",
        "#foodie",
        "#yummy",
        "#delicious",
        "#instalove",
        "#tasty",
        "#homemade",
        "#instacook",
        "#foodgasm",
        "#foodpics",
        "#foodlover",
        "#instayum",
        "#recipe",
        "#cooking",
        "#foodphotography",
        "#healthyeating",
        "#foodbloggers",
        "#foodheaven",
        "#eatwell",
        "#cleaneating",
        "#organic",
        "#nomnom",
        "#foodgram",
        "#instafoodie",
        "#fooddiary",
        "#foodlovers",
        "#foodart",
        "#foodstyling",
        "#foodforthought",
        "#foodisfuel",
        "#foodiegram",
        "#foodielife",
        "#foodshare",
        "#foodislife",
        "#foodpics",
        "#foodphotography",
        "#foodlover",
        "#foodgasm",
        "#foodporn",
        "#foodie",
        "#instafood"
      ]
      
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
)

module.exports = mongoose.model('Note', noteSchema)