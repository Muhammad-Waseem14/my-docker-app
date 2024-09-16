FROM node:latest

# COPY index.js /home/app/index.js
# COPY package.json /home/app/package.json
# OR we can copy all the files in the current directory using the following command

COPY . /home/app

WORKDIR /home/app/

RUN npm install

EXPOSE 9000

CMD [ "node", "index" ]