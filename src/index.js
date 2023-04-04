require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const berandaRouter = require('./routes/beranda.router')
const goalsRouter = require('./routes/goals.router')
const contactRouter = require('./routes/contact.router')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/', berandaRouter);
app.use('/', goalsRouter)
app.use('/', contactRouter)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
