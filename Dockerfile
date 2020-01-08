FROM node:8.10.0
WORKDIR /service-austin
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001

CMD ["npm", "start"]