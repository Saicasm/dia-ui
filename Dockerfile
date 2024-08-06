# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install
COPY .env .env
# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight server image to serve the application
FROM node:18-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV production
# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Set environment variables for the backend
# These can be overridden when running the container
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}
# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
