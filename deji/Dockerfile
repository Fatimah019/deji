# A Docker file to help dockerise the code by installing the needed dependencies and library

FROM node:16.13.2-alpine as build-step

#Create a folder called app
RUN mkdir /app 

#Use the app folder as the work directory
WORKDIR /app

#Copy the package.json into the app folder 
COPY package.json /app

#Install the needed dependencies
RUN npm install

#Copy the ./app folder
COPY . /app

#Build the production using nodejs
RUN npm run build

#Use nginx image to create nginx server and deploy app on it by copying build items as shown below
FROM nginx:1.17.1-alpine


COPY --from=build-step /app/build /usr/share/nginx/html

