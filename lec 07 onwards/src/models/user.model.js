import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true//to make searchable(optimized)
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,//ObjectId is the unique identifier MongoDB generates for each document (_id field).
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )//jwt.sign(payload, secretOrPrivateKey, [options, callback])
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            //"id" is saved in database which is saves as "_id"(converted in "_id" from "id" when "id" saves in db)
            _id: this._id,   //payload
        },
        process.env.REFRESH_TOKEN_SECRET, //secretOrPrivateKey
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY //[options, callback]
        }
    )
    //jwt.sign(payload, secretOrPrivateKey, [options, callback])
}

export const User = mongoose.model("User", userSchema)