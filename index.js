const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require('./db');
const router = require('./routes/router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Import your User model here
const {User} = require('./models/user-model');

// API route for retrieving email and checking if it exists
app.get('/api/user/email/:email', async (req, res) => {
  try {
    const email = req.params.email;


    // Check if the email exists in the database
    const user = await User.findOne({ email });

    if (user) {
      // If the email exists, return a response indicating that the email is taken
      return res.json({ emailExists: true });
    }

    // Email doesn't exist
    res.json({ emailExists: false });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ error: 'Error checking email. Please try again later.' });
  }
});



// Use your existing router
app.use('/api', router);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
