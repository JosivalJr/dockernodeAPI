<h1 align="center">Dockernode API</h1>


<p align="center">
    <a href="#application">Application</a> • 
    <a href="#technologies">Tecnologias</a> • 
    <a href="#pré-install">Install</a> • 
    <a href="#author">Author</a> •
</p>


## Application

<p>API developed to manipulate some String and Number datas.</p>

1. <b>Reserve Intenges:</b> This endpoint receives a valid integer as a parameter and manipulate it to return a new number with inverted digits.

2. <b>Average Words Length:</b> This endpoint receives a sentence as a parameter and performs the calculation of the total average of letters used to write it.

3. <b>Words Match:</b> This endpoint receives two sentences as a parameter and describes two sequence of values, the first with words shared between sentences, and the second with words that are not shared.

[Postman API Documentation](https://elements.getpostman.com/redirect?entityId=20039334-465e091b-ad74-4a76-a532-d9905635f3e6&entityType=collection)


## Status

<h4 > 🚀 ...Awaiting feedbacks... </h4>

## Features

- [x] API Reverse Integes
- [x] API Average Words Length
- [x] API Matched & Mismatched Words
- [x] Factory Design
- [x] Return only JSON
- [x] Dockerized
- [x] JWT

## Technologies

- [Nodejs](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/)

## Pré-Install

- [Nodejs](https://nodejs.org/en) <b>*required</b>
- [Docker](https://docs.docker.com/desktop/get-started/) <b>*required</b>
- [Postman](https://www.postman.com/)

## Install

1. Make a clone from this repository;
2. Access project root `/dockernode` in terminal/cmd;
3. Fill enviroments `[PORT, HOST, SECRET]` in `.env` at root project;
4. Run `npm install` to install all dependencies;
5. Run `docker-compose up` to run docker services;

## Author

Developed by Josival Oliveira.