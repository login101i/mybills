const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const morgan = require('morgan');

const transactionRoutes = require('./routes/transactionRoutes')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })
connectDB()

const app = express()
app.use(express.json())


// app.use('/', (req, res) => {
//     res.send("sdfsfsdfdf")
// })
app.use('/api/v1/transactions', transactionRoutes)


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serwer działa na procesie ${process.env.NODE_ENV} na hoscie ${PORT}`.blue.bold)
})




