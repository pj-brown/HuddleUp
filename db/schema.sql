-- drop the database if it exists --
DROP DATABASE IF EXISTS huddleup_db;
-- create the database --
CREATE DATABASE huddleup_db;

-- 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

-- use database huddleup --
USE huddleup_db;

-- create table for managers --
CREATE TABLE managers (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (255) NOT NULL
);

CREATE TABLE roster (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    managerID,
    teamName,
    location,
    bio,
	FOREIGN KEY (managerID) REFERENCES managers (id)
);

CREATE TABLE players (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    rosterID,
    firstName,
    lastName,
    phoneNumber,
    position,
    number,
	points,
    rebounds,
    assist,
    gamesPlayed,
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);

CREATE TABLE events (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    rosterID,
    date,
    type, (practice or game)
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);