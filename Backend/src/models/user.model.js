const mangoose = require("mongoose")

const userSchema = new mangoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already taken."],
        required: true
    },
    email: {
        type: String,
        unique: [true, "Account already exists with this email Address."],
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mangoose.model("users", userSchema)

module.exports = userModel