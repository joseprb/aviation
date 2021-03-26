CREATE TABLE `Admin` (
	`IdAdmin` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`DisplayName` varchar(50) NOT NULL,
	`Password` varchar(25) NOT NULL,
	PRIMARY KEY (`IdAdmin`)
);

CREATE TABLE `RegisteredVisitor` (
	`IdVisitor` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`DisplayName` varchar(50) NOT NULL,
	`Password` varchar(25) NOT NULL,
	PRIMARY KEY (`IdVisitor`)
);

CREATE TABLE `TempatWisata` (
	`IdTempatWisata` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdAdmin` INT(11) NOT NULL,
	`NamaTempatWisata` varchar(50) NOT NULL,
	`Alamat` varchar(150) NOT NULL,
	`Deskripsi` varchar(150) NOT NULL,
	`Rating` FLOAT(3) NOT NULL,
	PRIMARY KEY (`IdTempatWisata`)
);

CREATE TABLE `Rate` (
	`IdRating` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdTempatWisata` INT(11) NOT NULL,
	`IdVisitor` INT(11) NOT NULL,
	`InputanRating` INT(1) NOT NULL,
	PRIMARY KEY (`IdRating`)
);

CREATE TABLE `Review` (
	`IdReview` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdTempatWisata` INT(11) NOT NULL,
	`IdVisitor` INT(11) NOT NULL,
	`InputanReview` varchar(500) NOT NULL,
	PRIMARY KEY (`IdReview`)
);

CREATE TABLE `Komentar` (
	`IdKomentar` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdTempatWisata` INT(11) NOT NULL,
	`IdVisitor` INT(11) NOT NULL,
	`IdReview` INT(11) NOT NULL,
	`InputanKomentar` varchar(140) NOT NULL,
	PRIMARY KEY (`IdKomentar`)
);

CREATE TABLE `AppliedTempatWisata` (
	`IdApplied` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdVisitor` INT(11) NOT NULL,
	`NamaApplied` varchar(50) NOT NULL,
	`DeskripsiApplied` varchar(150) NOT NULL,
	`AlamatApplied` varchar(150) NOT NULL,
	`IsApproved` BOOLEAN,
	`IdAdmin` INT(11) NOT NULL,
	PRIMARY KEY (`IdApplied`)
);

CREATE TABLE `LogEntryLogin` (
	`IdLogin` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdAdmin` INT(11) NOT NULL,
	`IdVisitor` varchar(25) NOT NULL,
	`Timestamp` DATETIME,
	PRIMARY KEY (`IdLogin`)
);

CREATE TABLE `LogContribution` (
	`IdContribution` INT(11) NOT NULL AUTO_INCREMENT UNIQUE,
	`IdReview` INT(11) NOT NULL,
	`IdRating` INT(11) NOT NULL,
	`IdKomentar` INT(11) NOT NULL,
	`Timestamp` DATETIME,
	PRIMARY KEY (`IdContribution`)
);

CREATE TABLE `Report` (
	`IdReport` INT(11) NOT NULL AUTO_INCREMENT,
	`Report_Category` varchar(255) NOT NULL,
	`Report_Detail` varchar(255) NOT NULL,
	`Timestamp` DATETIME,
	`IdReview` INT(11) NOT NULL,
	`IdVisitor` INT(11) NOT NULL,
	PRIMARY KEY (`IdReport`)
);

ALTER TABLE `TempatWisata` ADD CONSTRAINT `TempatWisata_fk0` FOREIGN KEY (`IdAdmin`) REFERENCES `Admin`(`IdAdmin`);

ALTER TABLE `Rate` ADD CONSTRAINT `Rate_fk0` FOREIGN KEY (`IdTempatWisata`) REFERENCES `TempatWisata`(`IdTempatWisata`);

ALTER TABLE `Rate` ADD CONSTRAINT `Rate_fk1` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);

ALTER TABLE `Review` ADD CONSTRAINT `Review_fk0` FOREIGN KEY (`IdTempatWisata`) REFERENCES `TempatWisata`(`IdTempatWisata`);

ALTER TABLE `Review` ADD CONSTRAINT `Review_fk1` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);

ALTER TABLE `Komentar` ADD CONSTRAINT `Komentar_fk0` FOREIGN KEY (`IdTempatWisata`) REFERENCES `TempatWisata`(`IdTempatWisata`);

ALTER TABLE `Komentar` ADD CONSTRAINT `Komentar_fk1` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);

ALTER TABLE `Komentar` ADD CONSTRAINT `Komentar_fk2` FOREIGN KEY (`IdReview`) REFERENCES `Review`(`IdReview`);

ALTER TABLE `AppliedTempatWisata` ADD CONSTRAINT `AppliedTempatWisata_fk0` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);

ALTER TABLE `AppliedTempatWisata` ADD CONSTRAINT `AppliedTempatWisata_fk1` FOREIGN KEY (`IdAdmin`) REFERENCES `Admin`(`IdAdmin`);

ALTER TABLE `LogEntryLogin` ADD CONSTRAINT `LogEntryLogin_fk0` FOREIGN KEY (`IdAdmin`) REFERENCES `Admin`(`IdAdmin`);

ALTER TABLE `LogEntryLogin` ADD CONSTRAINT `LogEntryLogin_fk1` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);

ALTER TABLE `LogContribution` ADD CONSTRAINT `LogContribution_fk0` FOREIGN KEY (`IdReview`) REFERENCES `Review`(`IdReview`);

ALTER TABLE `LogContribution` ADD CONSTRAINT `LogContribution_fk1` FOREIGN KEY (`IdRating`) REFERENCES `Rate`(`IdRating`);

ALTER TABLE `LogContribution` ADD CONSTRAINT `LogContribution_fk2` FOREIGN KEY (`IdKomentar`) REFERENCES `Komentar`(`IdKomentar`);

ALTER TABLE `Report` ADD CONSTRAINT `Report_fk0` FOREIGN KEY (`IdReview`) REFERENCES `Review`(`IdReview`);

ALTER TABLE `Report` ADD CONSTRAINT `Report_fk1` FOREIGN KEY (`IdVisitor`) REFERENCES `RegisteredVisitor`(`IdVisitor`);
