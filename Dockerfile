# Use official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the application port
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
