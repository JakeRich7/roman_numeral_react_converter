# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app for production
RUN npm run build

# Install a simple web server to serve the built React app
RUN npm install -g serve

# Expose port for serving the app
EXPOSE 5000

# Run the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
