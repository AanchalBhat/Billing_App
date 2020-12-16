FROM node:slim
RUN apt-get update && \
    apt-get -y install libfontconfig libgtk2.0 libidn11 libglu1-mesa

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY server.js ./
COPY src ./src

CMD [ "node", "server.js" ]
