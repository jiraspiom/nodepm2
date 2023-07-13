FROM node:18-alpine
RUN mkdir -p /home/node/src/node_modules && chown -R node:node /home/node/src
WORKDIR /home/node/src
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 3001
CMD ["node", "server.ts"]