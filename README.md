## REST Full API

## Built With
* Node.js
* Express.js
* MySql


## Requirements

For development, you will only need Node.js v16+ and mysql installed in your environnement.


## Install 
    using SSH:
    $ git clone git@github.com:knrbokhari/Backend_Coding_Task_SQL.git
    or using HTTPS:
    $ git clone https://github.com/knrbokhari/Backend_Coding_Task_SQL.git
    $ cd Backend_Coding_Task_SQL
    $ npm install


## create database and table
Open your terminal and run this code & give your password.:
```
mysql -u root -p
```

create new database:

```
CREATE DATABASE databasename;
```
```
use databasename;
```
creates table called movies & ratings

```
CREATE TABLE movies (
    tconst varchar(9) PRIMARY KEY,
    titleType varchar(9),
    primaryTitle varchar(9),
    runtimeMinutes int,
    genres varchar(11)
);
```
and
```
CREATE TABLE ratings (
    tconst varchar(9) PRIMARY KEY,
    averageRating varchar(13),
    numVotes varchar(9)
);
```
and type `exit` then enter.

### import csv into MySql Table
Go to `http://localhost/phpmyadmin` and give user and password. Go to your database select database & movies table. Go to import page. click on `Choose File` and select `movies.csv` & and `check` Do not abort on INSERT error. and click Go button. Delete the fast row. Do the same for ratings table.

## Configure app
Create a `.env` file. Open `.env` then You will need to give your PORT, DB_HOST, DB_USER, DB_PASS and DATABASE:

```
PORT=
DB_HOST=
DB_USER=
DB_PASS=
DATABASE= 
```
### Run the server with nodemon
    $ npm run dev
### Run the server 
    $ npm start