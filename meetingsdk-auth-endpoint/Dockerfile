# Use the official Node.js image with the specified version
FROM node:16.17.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install -g npm@8.15.0
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the React app will run
EXPOSE 4000

# Command to start the React app
CMD ["npm", "start"]
