FROM node

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY src/* /src

EXPOSE  8080
CMD ["node", "/src/index.js"]
