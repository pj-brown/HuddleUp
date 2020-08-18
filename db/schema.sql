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
    INTEGER managerID,
    VARCHAR teamName(30),
    location,
    VARCHAR bio(30),
	FOREIGN KEY (managerID) REFERENCES managers (id)
);

CREATE TABLE players (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    INTEGER rosterID (11),
    VARCHAR firstName (30),
    VARCHAR lastName (30),
    VARCHAR phoneNumber (12),
    VARCHAR position (3),
    TINYINT playerNumber (11),
	TINYINT points (11),
    TINYINT rebounds (11),
    TINYINT assist (11),
    TINYINT gamesPlayed (11),
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);

CREATE TABLE events (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    INTEGER rosterID (11),
    date,
    type, (practice or game)
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);