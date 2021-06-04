-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 03:31 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_aviation`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`idAdmin`, `username`, `password`) VALUES
(2, 'admin', '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Table structure for table `appliedtempatwisata`
--

CREATE TABLE `appliedtempatwisata` (
  `idApplied` int(11) NOT NULL,
  `namaApplied` varchar(50) NOT NULL,
  `deskripsiApplied` varchar(150) NOT NULL,
  `alamatApplied` varchar(150) NOT NULL,
  `isApproved` int(1) NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `artikelimages`
--

CREATE TABLE `artikelimages` (
  `idImage` int(11) NOT NULL,
  `idTempatWisata` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artikelimages`
--

INSERT INTO `artikelimages` (`idImage`, `idTempatWisata`, `imageName`) VALUES
(2, 6, 'j0LS12PHBi.jpg'),
(4, 2, 'ei7DROULgr.jpg'),
(7, 2, 'IWORLMjn2s.jpg'),
(8, 7, 'oGeuQeBjzp.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `komentar`
--

CREATE TABLE `komentar` (
  `idKomentar` int(11) NOT NULL,
  `idTempatWisata` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL,
  `idReview` int(11) NOT NULL,
  `inputanKomentar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `komentar`
--

INSERT INTO `komentar` (`idKomentar`, `idTempatWisata`, `idVisitor`, `idReview`, `inputanKomentar`) VALUES
(2, 2, 1, 1, 'komen 2\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `logcontribution`
--

CREATE TABLE `logcontribution` (
  `idContribution` int(11) NOT NULL,
  `idReview` int(11) NOT NULL,
  `idRating` int(11) NOT NULL,
  `idKomentar` int(11) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `logentrylogin`
--

CREATE TABLE `logentrylogin` (
  `idLogin` int(11) NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `idRating` int(11) NOT NULL,
  `idTempatWisata` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL,
  `inputanRating` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`idRating`, `idTempatWisata`, `idVisitor`, `inputanRating`) VALUES
(2, 6, 7, 5);

-- --------------------------------------------------------

--
-- Table structure for table `registeredvisitor`
--

CREATE TABLE `registeredvisitor` (
  `idVisitor` int(11) NOT NULL,
  `nama` varchar(40) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeredvisitor`
--

INSERT INTO `registeredvisitor` (`idVisitor`, `nama`, `username`, `password`) VALUES
(1, 'user1', 'user', 'ee11cbb19052e40b07aac0ca060c23ee'),
(2, 'user2', 'user2', '7e58d63b60197ceb55a1c487989a3720'),
(7, 'user3', 'user3', '92877af70a45fd6a2ed7fe81e1236b78');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `idReport` int(11) NOT NULL,
  `reportCategory` varchar(255) NOT NULL,
  `reportDetail` varchar(255) NOT NULL,
  `timestamp` datetime NOT NULL,
  `idReview` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `idReview` int(11) NOT NULL,
  `idTempatWisata` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL,
  `inputanReview` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`idReview`, `idTempatWisata`, `idVisitor`, `inputanReview`) VALUES
(1, 2, 1, 'review 1'),
(3, 2, 2, 'aaekwpekaopwa[dw[kd'),
(5, 7, 7, 'test');

-- --------------------------------------------------------

--
-- Table structure for table `tempatwisata`
--

CREATE TABLE `tempatwisata` (
  `idTempatWisata` int(11) NOT NULL,
  `namaTempatWisata` varchar(75) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `deskripsi` varchar(200) NOT NULL,
  `idAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tempatwisata`
--

INSERT INTO `tempatwisata` (`idTempatWisata`, `namaTempatWisata`, `alamat`, `deskripsi`, `idAdmin`) VALUES
(2, 'artikel new ', 'sad sadde fwef', 'ds tgrtg', 2),
(7, 'artikel test 2423', 'dk ldaskd i joi l l', 'sjdh eofwe wehrowei ', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indexes for table `appliedtempatwisata`
--
ALTER TABLE `appliedtempatwisata`
  ADD PRIMARY KEY (`idApplied`);

--
-- Indexes for table `artikelimages`
--
ALTER TABLE `artikelimages`
  ADD PRIMARY KEY (`idImage`);

--
-- Indexes for table `komentar`
--
ALTER TABLE `komentar`
  ADD PRIMARY KEY (`idKomentar`);

--
-- Indexes for table `logcontribution`
--
ALTER TABLE `logcontribution`
  ADD PRIMARY KEY (`idContribution`);

--
-- Indexes for table `logentrylogin`
--
ALTER TABLE `logentrylogin`
  ADD PRIMARY KEY (`idLogin`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`idRating`);

--
-- Indexes for table `registeredvisitor`
--
ALTER TABLE `registeredvisitor`
  ADD PRIMARY KEY (`idVisitor`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`idReport`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`idReview`);

--
-- Indexes for table `tempatwisata`
--
ALTER TABLE `tempatwisata`
  ADD PRIMARY KEY (`idTempatWisata`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `appliedtempatwisata`
--
ALTER TABLE `appliedtempatwisata`
  MODIFY `idApplied` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `artikelimages`
--
ALTER TABLE `artikelimages`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `komentar`
--
ALTER TABLE `komentar`
  MODIFY `idKomentar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `logcontribution`
--
ALTER TABLE `logcontribution`
  MODIFY `idContribution` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logentrylogin`
--
ALTER TABLE `logentrylogin`
  MODIFY `idLogin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `idRating` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registeredvisitor`
--
ALTER TABLE `registeredvisitor`
  MODIFY `idVisitor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `idReport` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `idReview` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tempatwisata`
--
ALTER TABLE `tempatwisata`
  MODIFY `idTempatWisata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
