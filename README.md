# Prodigy InfoTech - Backend Task 1  
🚀 **Basic REST API with CRUD Operations**  

## Features  
✅ Create, Read, Update, Delete users  
✅ In-memory storage (no database)  
✅ Input validation (email, age, name)  
✅ Proper HTTP status codes (400, 404, etc.)  

## Tech Stack  
- Node.js  
- Express  
- Express-Validator  
- UUID (for unique IDs)  

## Setup  
1. Clone the repo  
2. Run `npm install`  
3. Start server: `node server.js`  

## Endpoints  
| Method | Endpoint    | Description          |
|--------|------------|----------------------|
| POST   | /users     | Create a new user    |
| GET    | /users     | Get all users        |
| GET    | /users/:id | Get a single user    |
| PUT    | /users/:id | Update a user        |
| DELETE | /users/:id | Delete a user        |

🔹 **Learned:** REST API design, error handling, validation  
🔹 **Applied:** Node.js, Express, HTTP status codes  
