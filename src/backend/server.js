const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const cors = require('cors');
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy trên cổng ${PORT}`));