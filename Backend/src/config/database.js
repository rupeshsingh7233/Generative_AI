const mongoose = require("mongoose")

// required database DNS Server
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"])


async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database Successfully.")
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectToDB ;