const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
var cors = require('cors')


const port = process.env.PORT || 8000;
app.use(cors())
// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://nadeemashfaqit:12345@ac-lrv53ag-shard-00-00.tvhcw8m.mongodb.net:27017,ac-lrv53ag-shard-00-01.tvhcw8m.mongodb.net:27017,ac-lrv53ag-shard-00-02.tvhcw8m.mongodb.net:27017/advocite?ssl=true&replicaSet=atlas-9eskos-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/data', dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
