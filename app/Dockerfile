FROM node:latest

# COPY index.js /app/index.js
# COPY package.json /app/package.json
# OR we can copy all the files in the current directory using the following command

RUN npm install -g nodemon

COPY . /myapp

WORKDIR /myapp/

RUN npm install

EXPOSE 9000

CMD [ "npm", "run", "dev" ]