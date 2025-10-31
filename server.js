const exprees = require ('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const Thing = require('./models/Thing');

app.post('/api/things', async (req, res) => {
  const thing = new Thing({ name: req.body.name });
  await thing.save();
  res.json(thing);
});

app.use(express.json()); // needed for parsing JSON

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
res.send('Hello MEAN Stack!');
});

