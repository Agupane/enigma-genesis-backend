FROM node:10.16.0

# Work directory
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN yarn install
COPY . /app

# Build app
RUN yarn run build

# expose the port to outside world
EXPOSE  8080

# Run app
CMD [ "node", "dist/index.js" ]
#RUN yarn start

