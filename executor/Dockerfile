FROM ubuntu:16.04
MAINTAINER Wine Chen
RUN apt-get update
RUN apt-get install -y openjdk-8-jdk
RUN apt-get install -y python3
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install -g nodemon
RUN apt-get install build-essential