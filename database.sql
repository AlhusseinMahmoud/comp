-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 13, 2021 at 11:00 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comp`
--
CREATE DATABASE IF NOT EXISTS `comp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `comp`;

-- --------------------------------------------------------

--
-- Table structure for table `comps`
--

CREATE TABLE `comps` (
  `id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(7) NOT NULL,
  `status` varchar(4) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comps`
--

INSERT INTO `comps` (`id`, `name`, `phone`, `address`, `type`, `status`, `email`) VALUES
(1, 'فرونتير تقنية المعلومات', '123676128', 'الخرطوم بحري شارع لاصناعات كافوري', 'شركة', 'قديم', 'tayfour@hotmail.com'),
(2, 'قولدن  سكوير الهندسية', '123676128', 'المقرن', 'شركة', 'قديم', 'jjjjjjj@kkkk.llll'),
(3, 'خالد صلاح للإنشاءات', '123626998', 'الجريف غرب ', 'عمل', 'جديد', 'khalid@gmail'),
(4, 'أبا يزيد محمد عثمان', '123626998', 'الكلاكلة', 'عمل', 'قديم', 'yazeed@sedc.com'),
(5, 'أبوعبيدة لأعمال الكهرباء', '0123676245', 'الجريف غرب ', 'إسم عمل', 'جديد', 'obieda@sedccom'),
(6, 'عصفور', '12365497', 'الأبيض', 'عمل', 'جديد', 'bird@sky'),
(7, 'عماد القاسم للمقاولات', '156546546', 'الكلاكلة شرق', 'عمل', 'جديد', 'omda@gmail.com'),
(8, 'كيلة للإنشاءات', '0123676254 - 210152855', 'أم درمان الثورة الحارة العاشرة ', 'شركة', 'قديم', 'kaila@gmail.com'),
(9, 'الوليد عمر عطية', '05847895', 'الشمالية', 'عمل', 'جديد', 'waleed@gmail.com'),
(10, 'حمادة حامد', '0992584782', 'القولد', 'عمل', 'جديد', 'hamada@yahoo.com'),
(11, 'منتجون الفرح للمقاولات', '0123456789', 'اللواية الشمالية دنقلا', 'عمل', 'جديد', 'happiness.@joy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comps`
--
ALTER TABLE `comps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comps`
--
ALTER TABLE `comps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;