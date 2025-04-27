# Use the official Node.js 16 base image
FROM node:23-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
