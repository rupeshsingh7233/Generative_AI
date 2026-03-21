const mangoose = require("mongoose")


const blacklistTokenSchema = new mangoose.Schema({

    token: {
        type: String,
        required: [true, "Token is required to be addad in blacklist."]
    }
}, {
    timestamps: true
})

const tokenBlacklistModel = mangoose.model("blacklistToken", blacklistTokenSchema)


module.exports = tokenBlacklistModel