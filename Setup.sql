CREATE TABLE profiles
(
    id VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    picture VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE posts
(
  id INT AUTO_INCREMENT,
  creatorId VARCHAR(255) NOT NULL,
  title VARCHAR(155) NOT NULL,
  text VARCHAR(255) NOT NULL,
  upvotes INT,
  downvotes INT,
  PRIMARY KEY (id),
  FOREIGN KEY (creatorId)
    REFERENCES profiles(id)
    ON DELETE CASCADE
);

CREATE TABLE comments
(
  id INT AUTO_INCREMENT,
  creatorId VARCHAR(255) NOT NULL,
  text VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
    FOREIGN KEY (creatorId)
      REFERENCES profiles(id)
      ON DELETE CASCADE
);