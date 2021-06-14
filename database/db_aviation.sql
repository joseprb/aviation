-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2021 at 03:37 AM
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

--
-- Dumping data for table `appliedtempatwisata`
--

INSERT INTO `appliedtempatwisata` (`idApplied`, `namaApplied`, `deskripsiApplied`, `alamatApplied`, `isApproved`, `idAdmin`, `idVisitor`) VALUES
(2, 'tes1', 'tes2', 'tes3', 0, 0, 1),
(3, 'asd', 'dsa', 'asd', 1, 2, 1),
(4, 'art1', 'art1', 'art1', 1, 2, 1);

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
(8, 7, 'oGeuQeBjzp.jpg'),
(9, 2, 'aYY4ChWn8g.jpg'),
(10, 10, 'KfcKGdXhAI.jpg'),
(11, 11, 'toJGnEavez.jpg'),
(12, 12, 'kBfVU6vVf7.jpg'),
(13, 13, 'FFgNOqGd53.jpg'),
(14, 14, 'uuKfqvtXkm.jpg'),
(15, 15, 'JA3aP9MryD.jpg'),
(16, 16, '6E6aYzJJO9.jpg'),
(17, 17, 'DGITutFC6N.jpg'),
(18, 18, 'hnnL1yDbdI.jpg'),
(19, 19, 'Qy0QXMYrTH.jpg');

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
(2, 7, 7, 5),
(3, 12, 1, 5),
(4, 12, 2, 4);

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

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`idReport`, `reportCategory`, `reportDetail`, `timestamp`, `idReview`, `idVisitor`) VALUES
(4, 'Hate Speech', 'sdasd', '2021-06-09 15:12:27', 1, 1),
(5, 'Spam', 'dasd', '2021-06-13 11:18:19', 3, 1),
(6, 'Spam', 'tes', '2021-06-14 03:02:33', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `idReview` int(11) NOT NULL,
  `idTempatWisata` int(11) NOT NULL,
  `idVisitor` int(11) NOT NULL,
  `inputanReview` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`idReview`, `idTempatWisata`, `idVisitor`, `inputanReview`) VALUES
(6, 12, 1, 'Menurut saya yg perlu dibenahi adalah jalan2 menuju Danau Toba yg sangat sempit. Seharusnya bisa diperlebar lagi demi kenyamanan turis yg datang'),
(7, 12, 2, 'Lha jaman saya ke Toba pertama kali tahun 2008 sampai terakhir saya kesana September 2019, kondisinya masih sama persis. Yo mung ngono kui wae, nggak ada kemajuan yang berarti. Hotel-hotelnya masih buluk, pelayanan masih buruk, fasilitas untuk turis juga masih minim dan kondisinya busuk, masyarakatnya juga tidak \'welcome\', kondisi jalan juga masih gronjalan, harga-harga buat turis juga \'ngepruk\', lingkungannya juga masih tidak tertata, ditambah berita gagal pahamnya Bupati Samosir tentang \'wisata halal\'. Pokokmen marai kapok buat balik lagi meskipun pemandangan alamnya sungguh sangat indah');

-- --------------------------------------------------------

--
-- Table structure for table `tempatwisata`
--

CREATE TABLE `tempatwisata` (
  `idTempatWisata` int(11) NOT NULL,
  `namaTempatWisata` varchar(75) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `deskripsi` varchar(1000) NOT NULL,
  `idAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tempatwisata`
--

INSERT INTO `tempatwisata` (`idTempatWisata`, `namaTempatWisata`, `alamat`, `deskripsi`, `idAdmin`) VALUES
(12, 'Danau Toba', 'Sumatera Utara', 'Toppers pernah berkunjung ke Danau Toba? Danau dengan keindahan yang tidak tertandingi ini merupakan danau vulkanik terbesar di Asia Tenggara dan terbesar kedua di dunia setelah Danau Victoria.\r\n\r\nDanau Toba sudah lama terkenal sebagai salah satu objek wisata Indonesia favorit yang sering dikunjungi sejak tahun 1980-an lho!\r\n\r\nObjek wisata Indonesia yang terkenal di dunia ini memiliki luas 1.145 kilometer persegi. Di tengah danau terdapat Pulau Samosir yang luasnya hampir sebanding dengan negara Singapura. Bisa bayangin kan Toppers, betapa megahnya Danau Toba ini?\r\n\r\nSelain terluas, danau ini juga termasuk salah satu danau terdalam di dunia dengan kedalaman sekitar 450 meter.\r\n\r\nBuat Toppers yang sedang atau ingin berkunjung ke Sumatera Utara, sempatkan mampir untuk menikmati keindahan Danau Toba, ya.', 2),
(13, 'Taman Laut Bunaken', 'Sulawesi Utara', 'Destinasi wisata di Indonesia yang populer di mancanegara selanjutnya adalah Taman Laut Bunaken yang berada di Teluk Manado.\r\n\r\nBunaken menjadi salah satu objek wisata di Indonesia yang mengundang decak kagum karena keindahan taman bawah lautnya yang sulit ditemukan di negara lain.\r\n\r\nBerkunjung ke Taman Laut Bunaken, Toppers akan menemukan keindahan kehidupan di dalam laut yang membuat mata kamu tidak bisa berhenti memandangnya.\r\n\r\nDi dalam taman laut ini terdapat 13 jenis terumbu karang yang didominasi dengan bebatuan laut.\r\n\r\nSelain itu, pemandangan yang paling menarik adalah adanya terumbu karang terjal vertikal yang menjulang ke bawah sedalam 25 – 50 meter. Tidak sampai di situ, mata kita akan dimanjakan dengan 91 jenis ikan yang ada di dalamnya.\r\n\r\nTidak heran kalau Taman Laut Bunaken menjadi salah satu destinasi bagi para wisatawan terutama para pecinta laut.\r\n\r\nApalagi tujuan wisata Indonesia favorit wisatawan asing ini menyediakan fasilitas untuk scuba diving dengan 20 titik p', 2),
(14, 'Wakatobi ', 'Sulawesi Tenggara', 'Masih di Pulau Sulawesi, Taman Nasional Wakatobi juga merupakan salah satu tujuan wisata bawah laut yang populer dan mendunia.\r\n\r\nDengan luas mencapai 13.900 km2, tujuan wisata terkenal asal Indonesia ini memiliki tak kurang dari 112 jenis terumbu karang yang bersimbiosis dengan ikan-ikan bawah laut sehingga menciptakan panorama bawah laut yang tiada tanding.\r\n\r\nSemuanya itu menjadikan Wakatobi sebagai salah satu surga menyelam bagi para traveler dari berbagai penjuru dunia.', 2),
(15, 'Kepulauan Raja Ampat', 'Papua Barat', 'Surga dunia di Indonesia selanjutnya adalah kepulauan Raja Ampat yang terletak di Papua Barat dengan kekayaan laut terlengkap di bumi.\r\n\r\nRaja Ampat atau Empat Raja merupakan 4 pulau indah yang merupakan penghasil lukisan batu kuno. Empat pulau utama yang dimaksud adalah Waigeo, Salawati, Batanta, dan Misool.\r\n\r\nNama-nama tersebut berasal dari mitos lokal dari warga di sekitar pulau Raja Ampat. Keindahan dan kemegahan dari objek wisata populer asal Indonesia ini mampu mengundang para wisatawan dari seluruh dunia untuk datang ke sini dan merasakan pengalaman sekaligus pemandangan yang tidak akan terlupakan.\r\n\r\nDengan wilayah pulau mencakup hingga 4,6 juta hektar tanah dan laut, kita bisa menemukan 540 jenis karang, 1.511 spesies ikan, serta 700 jenis moluska.\r\n\r\nPerlu diketahui Toppers, menurut laporan The Nature Conservancy and Conservation International, ada sekitar 75% spesies laut dunia yang tinggal di pulau indah nan menakjubkan ini.', 2),
(16, 'Gunung Bromo', 'Jawa Timur', 'Kalau kamu pernah berkunjung ke Jawa Timur gak lengkap rasanya kalau belum menginjakkan kaki ke Gunung Bromo ini.\r\n\r\nSalah satu gunung berapi yang masih aktif ini memiliki pesona khas berupa gurun pasir yang sangat luat.\r\n\r\nMeskipun bukan salah satu gunung tertinggi di Indonesia, namun keindahan Gunung Bromo tidak ada duanya dan membuat para pengunjung dapat merasakan pemandangan yang fantastis dan spektakuler.\r\n\r\nWisatawan dapat berkuda dan mendaki gunung bromo untuk menikmati keindahan yang menawan saat matahari terbit dan terbenam.\r\n\r\nBisa jadi pengalaman secara langsung yang tidak terlupakan lho Toppers! Dengan keindahan yang menakjubkan itu tidak heran jika objek wisata di Indonesia satu ini menjadi para wisatawan mancanegara yang berkunjung ke Indonesia.', 2),
(17, 'Pulau Komodo', 'Nusa Tenggara Timur', 'Destinasi wisata Indonesia yang tersohor di mata dunia selanjutnya adalah Pulau Komodo. Pulau yang berlokasi di Kepulauan Nusa Tenggara Timur ini merupakan rumah bagi ratusan Komodo, hewan endemik yang hanya ada di Indonesia.\r\n\r\nSelain bisa mengamati perilaku dan mengeksplorasi habitat dari hewan purba ini, Pulau Komodo juga menawarkan panorama alam yang menakjubkan.\r\n\r\nSalah satunya adalah pantai dengan pasir berwarna merah muda yang dikenal dengan nama “Pink Beach“.\r\n\r\nPantai seperti ini hanya terdapat tujuh di seluruh dunia sehingga menjadikannya sebagai salah satu tujuan wisata Indonesia yang mendunia.', 2),
(18, 'Candi Borobudur', 'Jawa Tengah', 'Salah satu ikon wisata budaya Indonesia yang mendunia lainnya adalah Candi Borobudur. Sebagai candi Budha terbesar di dunia dengan luas tak kurang dari 123 X 123 meter, candi yang dibangun pada masa kerajaan Mataram kuno ini merupakan warisan budaya dan sejarah Indonesia yang terkenal akan arsitektur yang memukau.\r\n\r\nSetiap tahunnya, tak cuma wisatawan domestik tetapi banyak juga wisatawan asing yang tertarik untuk mengamati keindahan dari Candi Borobudur.\r\n\r\nBerbagai relief yang menceritakan mengenai berbagai ajaran dalam agama Budha dan perjalanan hidup Sidharta Gautama hingga mencapai pencerahan sempurna bisa Toppers temukan di tempat wisata favorit asal Indonesia.\r\n\r\nCandi Borobudur sendiri memiliki total tak kurang dari 504 arca Buddha dan 2.672 panel relief pada dinding-dindingnya. Menakjubkan sekali, bukan?', 2),
(19, 'Tana Toraja', 'Sulawesi Selatan', 'Indonesia memang kaya akan adat dan budaya yang menarik mata dunia. Salah satu destinasi wisata Indonesia yang terkenal akan kekayaan tradisi budayanya adalah  Kabupaten Tana Toraja.\r\n\r\nTerletak di Sulawesi Selatan dikawasan pegunungan yang indah, Toppers masih bisa melihat uniknya keseharian dan tradisi masyarakat adat Tana Toraja.\r\n\r\nSelain keindahan arsitektur tradisional rumah tongkonan, wisatawan juga bisa mengamati tradisi unik upacara kematian yang dikenal sebagai Rambu Solo yang biasanya diselenggarakan pada Juli dan Agustus\r\n\r\nKeunikan dari tradisi ini menjadikan Tana Toraja sebagai tempat wisata asal Indonesia yang memiliki daya tarik mendunia.', 2);

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
  MODIFY `idApplied` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `artikelimages`
--
ALTER TABLE `artikelimages`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `komentar`
--
ALTER TABLE `komentar`
  MODIFY `idKomentar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `idRating` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `registeredvisitor`
--
ALTER TABLE `registeredvisitor`
  MODIFY `idVisitor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `idReport` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `idReview` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tempatwisata`
--
ALTER TABLE `tempatwisata`
  MODIFY `idTempatWisata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
