-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: trainreserve_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` varchar(45) NOT NULL,
  `member_pwd` varchar(255) NOT NULL,
  `member_name` varchar(45) NOT NULL,
  `member_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `member_email_UNIQUE` (`member_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('aaa','$2b$12$RaZrLIrv1UFiPt0NFaABPOYfabJQLKbGTOtwWyntP617DI/srjaNm','aaa',NULL),('abc','$2b$12$yt2ZsCfSR8svV44p9mzLKu9JdquK5UH5aFfR8GqqEiRGs///KEvTC','abc',NULL),('czxc','$2b$12$CvHoSAqQ6se8l5/OdkXfVeGphdWoF3NmGs/d/PxYsGK9NddFRcLkC','cxzczx',NULL),('czxdsa','$2b$12$pSJHfV0CG6PmqLp1icmXCeSSe47SigRUEkXOrlw/90140uNICrEVa','나라바',NULL),('czxdsad','$2b$12$pMYjUfNx2zuUpu/GIrR2S..z99mlkgbX.1ARzJMeQHcvwwjftgRFK','나라바',NULL),('das','$2b$12$J6N6NF2J6qCVgoLgNuIZ6.f.4A5h/9QgeIYdYFGspqOk4mx3DKKFa','dasd',NULL),('dsa','$2b$12$2nnIngp42Zyp9Upb1JNjHedCYdMYb9eaoWHgZvmoJ6IqkJmqi1Xla','ㅁㄴㅇㅁㄴ',NULL),('eq','$2b$12$YcRxxCtG/EIzb35p6f1miOes.rSq547XLt7aVdDDGiF.h8tuov6ka','dasdsa',NULL),('goodgng','$2b$12$fkkz2Txed0UJA1mVXNnevuis1xiKgvLun0g5QPSYjj1.Rm5eYytGy','전기혁',NULL),('zldtmshdn','$2b$12$G/dXM6O4vNWeaF29j8o.7OFCnDp.o3LVWLO0dDDLz1OZwfNHyRtyO','전기혁',NULL);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `reserve_id` int NOT NULL AUTO_INCREMENT,
  `depart_year` int NOT NULL,
  `depart_month` int NOT NULL,
  `depart_day` int NOT NULL,
  `depart_time` int NOT NULL,
  `people_count` int NOT NULL DEFAULT '0',
  `member_id` varchar(45) NOT NULL,
  PRIMARY KEY (`reserve_id`),
  KEY `member_id_idx` (`member_id`),
  CONSTRAINT `member_id` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (1,2024,1,1,5,1,'zldtmshdn'),(2,2024,1,1,5,1,'zldtmshdn'),(3,2024,1,1,5,1,'zldtmshdn'),(4,2024,1,1,5,1,'zldtmshdn');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-29  2:29:39
