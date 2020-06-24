require('dotenv').config()
const express = require('express');
const db = require('./app/models');
const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    //create data for role
    // create_roles();
});

require('./app/router/router.js')(app);

function create_roles(){
	db.Role.create({
		id: 1,
		name: "USER"
	});
	
	db.Role.create({
		id: 2,
		name: "ADMIN"
	});
	
	db.Role.create({
		id: 3,
		name: "PM"
	});
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});