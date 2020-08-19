CREATE DATABASE huddleup_db;

 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;


USE huddleup_db;


CREATE TABLE managers (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (255)
);

CREATE TABLE roster (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    managerID INTEGER  (11),
    teamName VARCHAR  (30),
    city VARCHAR  (30),
	state VARCHAR  (30),
    bio VARCHAR  (240),
	FOREIGN KEY (managerID) REFERENCES managers (id)
);

CREATE TABLE players (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    rosterID INTEGER (11),
    firstName VARCHAR (30),
    lastName VARCHAR (30),
    phoneNumber VARCHAR (12),
   position INTEGER  (11),
    playerNumber INTEGER (11),
	points INTEGER (11),
    rebounds INTEGER  (11),
    assist INTEGER  (11),
    gamesPlayed INTEGER  (11),
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);

CREATE TABLE events (
    id INTEGER (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    rosterID INTEGER (11),
    eventDate DATE ,
    eventTime TIME ,
    eventType INTEGER (11), 
	FOREIGN KEY (rosterID) REFERENCES roster (id)
);