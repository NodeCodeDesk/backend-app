require('dotenv').config();
const app = require('./src/app');
const connect = require('./src/config/config')

connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
});