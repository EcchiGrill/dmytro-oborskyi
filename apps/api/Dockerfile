# Use Node.js base image
FROM node:23-alpine

# Adding OpenSSl 
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS app
RUN npm run build

# Expose API port
EXPOSE 4200

# Start the application
CMD ["node", "dist/main"]
