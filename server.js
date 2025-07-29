import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app';

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_PORT)
.then(() => {
	console.log('MongoDb Connected');
	app.listen(PORT, () => {
		console.log(`Server is running on PORT : ${PORT}`);
	})
})
.catch(err => console.error(`MongoDb connection error: ${err}`));