-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 12:01 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ikeastore`
--

-- --------------------------------------------------------

--
-- Table structure for table `furnitures`
--

CREATE TABLE `furnitures` (
  `furnitureId` int(11) NOT NULL,
  `furnitureTypeId` int(11) NOT NULL,
  `furnitureSize` varchar(100) NOT NULL,
  `furnitureColor` varchar(30) NOT NULL,
  `furniturePrice` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furnitures`
--

INSERT INTO `furnitures` (`furnitureId`, `furnitureTypeId`, `furnitureSize`, `furnitureColor`, `furniturePrice`) VALUES
(1, 6, '180*200', 'white', '800'),
(2, 2, '80*20*60', 'brown', '400'),
(3, 3, '40*60', 'black', '200'),
(4, 4, '50*50', 'brown', '300'),
(5, 7, '180*200', 'yellow', '1100'),
(6, 8, '40*100', 'red', '800'),
(7, 5, '40*40', 'blue', '300'),
(8, 1, '100*20', 'pink', '500');

-- --------------------------------------------------------

--
-- Table structure for table `furnituretype`
--

CREATE TABLE `furnituretype` (
  `furnitureTypeId` int(11) NOT NULL,
  `furnitureTypeName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furnituretype`
--

INSERT INTO `furnituretype` (`furnitureTypeId`, `furnitureTypeName`) VALUES
(1, 'Table'),
(2, 'Chair'),
(3, 'Closet'),
(4, 'Couch'),
(5, 'Shelf'),
(6, 'Bed'),
(7, 'Door'),
(8, 'Garden');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furnitures`
--
ALTER TABLE `furnitures`
  ADD PRIMARY KEY (`furnitureId`),
  ADD KEY `furnitureTypeId` (`furnitureTypeId`);

--
-- Indexes for table `furnituretype`
--
ALTER TABLE `furnituretype`
  ADD PRIMARY KEY (`furnitureTypeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `furnitures`
--
ALTER TABLE `furnitures`
  MODIFY `furnitureId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `furnituretype`
--
ALTER TABLE `furnituretype`
  MODIFY `furnitureTypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furnitures`
--
ALTER TABLE `furnitures`
  ADD CONSTRAINT `furnitures_ibfk_1` FOREIGN KEY (`furnitureTypeId`) REFERENCES `furnituretype` (`furnitureTypeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
