-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2022 at 03:56 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `railway`
--

-- --------------------------------------------------------

--
-- Table structure for table `booktik`
--

CREATE TABLE `booktik` (
  `TrainNumber` int(255) NOT NULL,
  `Cost` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booktik`
--

INSERT INTO `booktik` (`TrainNumber`, `Cost`) VALUES
(12345, 200);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `message`) VALUES
(1, 'mahi', 'hello'),
(5, 'thejas123@gmail.com', 'wdaffwa'),
(6, 'thejasprasad0101@gmail.com', 'hi sir pls update extra trains'),
(8, 'thejasprasad0101@gmail.com', 'hi hlo'),
(9, 'khemraj@gmail.com', 'This website is really gd thanks for this website\n'),
(10, 'thejasprasad0101@gmail.com', 'can v get shivamogha trains with some suggestions\n');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `name` varchar(255) NOT NULL,
  `mobilenum` bigint(255) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmpassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`name`, `mobilenum`, `email`, `password`, `confirmpassword`) VALUES
('yash', 9123456789, 'thejasprasad0101@gmail.com', '753', '357'),
('thejas prasad', 8971133320, 'thejasprasad0101@gmail.com', '1234', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `train_list`
--

CREATE TABLE `train_list` (
  `id` int(20) NOT NULL,
  `Train_name` varchar(100) NOT NULL,
  `Train_number` int(20) NOT NULL,
  `From_Train` varchar(20) NOT NULL,
  `To_Train` varchar(20) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `train_list`
--

INSERT INTO `train_list` (`id`, `Train_name`, `Train_number`, `From_Train`, `To_Train`, `description`) VALUES
(1, 'Vasco express', 1234, 'yeshwanthpur', 'vasco', ''),
(2, 'Yeshwanthpur express', 12346, 'vasco', 'yeshwanthpur', 'Daily Train  [Time:Dep-10 PM - Arr-12 PM]   \r\n'),
(3, 'Tumkur Express', 95134, 'Majestic', 'Tumkur', 'Daily Train  [Time:Dep-10 AM - Arr-11 AM]   \r\n[Sug-place = Shivgange,Mandhara Hills]'),
(4, 'Bangalore Exp', 95135, 'Tumkur', 'Majestic', 'Daily Train  [Time:Dep-12 PM - Arr-1 PM]   \r\n'),
(5, 'Mangaluru Intercity', 42685, 'Yeshwanthpur', 'Mangalore', 'Daily Train  [Time:Dep-7 AM - Arr-5 PM]   \r\n[Sug-place = Sakleshpura,Kudremukh]'),
(6, 'Bangalore Exp', 42686, 'Mangaluru', 'Yeshwanthpur', 'Daily Train  [Time:Dep-6 PM - Arr-5 AM]   \r\n'),
(7, 'Hassan Intercity', 75316, 'Yeshwanthpur', 'Hassan', 'Daily Train  [Time:Dep-6 PM - Arr-10 PM]   \r\n[Sug-place = Kodchadri,Ettin Bujja]'),
(8, 'Yeshanthpur express', 75317, 'Hassan', 'Yeshwanthpur (YPR)', 'Daily train [Time Dep-11 PM - Arr-1 AM]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `train_list`
--
ALTER TABLE `train_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `train_list`
--
ALTER TABLE `train_list`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
