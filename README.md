## Roman Numeral Converter

This project includes a web service and UI that converts an integer to its corresponding Roman numeral

### Running the Project

#### Backend (Express)
1. Navigate to the backend folder
2. Install dependencies: `npm install`
3. Start the server: `npm start` (server will run on http://localhost:8080)

#### Frontend (React)
1. Navigate to the frontend folder
2. Install dependencies: `npm install`
3. Start the app: `npm start` (app will run on http://localhost:3000)

### Engineering Methodology
- Backend
- Frontend
- Integration
- Unit tests
- Final polish

### Testing Methodology
- Unit tests are written for the Roman numeral conversion function to ensure correctness
- Unit tests are written for API endpoints
- Backend was tested using postman/browser
- Frontend was tested manually
- End-to-end testing was performed manually

### Dependencies
- React
- Express
- React Spectrum
- Axios
- Web-vitals
- CORS
- babel
- jest
- babel-jest
- supertest

### Unit Test Commands
```bash
    npm run unit-tests
```

### Docker Commands
To build and execute docker:
```bash
    docker-compose build
    docker-compose up
```
To terminate docker:
```bash
    docker-compose down
```

### Reference for Roman Numeral Specification:
- https://en.wikipedia.org/wiki/Roman_numerals