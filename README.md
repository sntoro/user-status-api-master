# user-status-api-master

# Preparation 

1. Install Dependecy :
    bcryptjs, cors, dotenv, express, jsonwebtoken, mysql2, sequelize
    
2. Database configuration :
  app/config/configDatabase->development
  
3. Create Database in mysql --> 'fastpay'

4. Running server --> node server.js


# Testing

1. POST http://localhost:8080/api/auth/signup 
id, name, email, password, roles[]

2. POST http://localhost:8080/api/auth/signin
id, password

3. GET http://localhost:8080/api/status
