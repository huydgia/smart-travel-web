# 1. Base image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all source code
COPY . .

# 5. Build Next.js app
RUN npm run build

# 6. Start production image
FROM node:18-alpine
WORKDIR /app

# 7. Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 8. Expose and run
EXPOSE 3000
CMD ["npm", "start"]