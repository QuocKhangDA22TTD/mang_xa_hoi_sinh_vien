const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy trên cổng ${PORT}`));