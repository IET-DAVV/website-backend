FROM node:20.19.6-alpine

WORKDIR /app

# Install build tools for better-sqlite3
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy only package files first
COPY package.json package.json ./

# Install dependencies inside Linux container
RUN npm install

# Copy full source (no node_modules now)
COPY . .

EXPOSE 1337

CMD ["yarn", "develop"]
