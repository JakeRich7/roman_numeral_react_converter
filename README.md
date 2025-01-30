## Roman Numeral Converter

This project includes a web service and UI that converts an integer to its corresponding Roman numeral

### Running the Project

#### Backend (Express)
1. Navigate to the backend folder (root)
2. Install dependencies: `npm install`
3. Start the server: `npm start` (server will run on http://localhost:8080)

#### Frontend (React)
1. Navigate to the frontend folder (roman-numeral-ui)
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

### Run Unit Tests Command
`npm run unit-tests`

### Docker Commands
To build and execute docker:
`docker-compose build`
`docker-compose up`

To terminate docker:
`docker-compose down`

### Reference for Roman Numerals Specification:
- https://en.wikipedia.org/wiki/Roman_numerals

### Justification for Component Libary chosen:
- You favor 'Adobe React Spectrum', so that's what I used