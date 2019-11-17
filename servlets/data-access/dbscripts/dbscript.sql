CREATE TABLE `cs472-201911-lesson15-contacts-db`.`contacts` (
  `contacts_id` INT NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(8) NOT NULL,
  `category` VARCHAR(15) NOT NULL,
  `message` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`contacts_id`));

INSERT INTO `cs472-201911-lesson15-contacts-db`.`contacts` (`customer_name`, `gender`, `category`, `message`) VALUES ('Anna J. Zenstrom', 'Female', 'Feedback', 'This is a sample feedback message.');
INSERT INTO `cs472-201911-lesson15-contacts-db`.`contacts` (`customer_name`, `gender`, `category`, `message`) VALUES ('Bob Jean-Claude', 'Male', 'Inquiry', 'This one is an inquiry');
