require('dotenv').config();
const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/userRoute');
const courseRouter = require('./routes/courseRoute');
const pesertaRouter = require('./routes/pesertaRoute');
const loginRouter = require('./routes/loginRoute');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// User Routes
app.use('/user', userRouter);
// Course Routes
app.use('/course', courseRouter);
// Peserta Routes
app.use('/peserta', pesertaRouter);
// Login Routes
app.use('/login', loginRouter);




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})