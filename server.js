const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/Thing');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.json()); // for parsing application/json

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello MEAN Stack!');
});

// Example API route
app.post('/api/things', async (req, res) => {
  const thing = new Thing({ name: req.body.name });
  await thing.save();
  res.json(thing);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

