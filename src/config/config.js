const mongoose = require('mongoose');

const connect = async () => {
	try {
		const conn = await mongoose.connect(`${process.env.MONGO_URI}/backend-foundation`, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`MongoDb connected: ${conn.connection.host}`)
	} catch (error) {
		console.log(`MongoDb connection error: ${error.message}`)
	}
}

module.exports = connect;