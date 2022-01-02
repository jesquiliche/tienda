FROM node:16.3

WORKDIR /app
ADD packa* ./
COPY src/* ./
RUN npm install
RUN npm i -g nodemon
EXPOSE 3000
#VOLUME . .
CMD ["nodemon", "src/index.js"]

 