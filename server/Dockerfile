FROM node:16-slim

# Create app directory
WORKDIR /opt/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN cp config.json src/config.json && \
    npm run transpile

EXPOSE 3003

CMD [ "node", "dist/index.js" ]

