# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose backend port (change if yours is different)
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]