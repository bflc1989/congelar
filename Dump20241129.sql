CREATE DATABASE  IF NOT EXISTS `congelardb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `congelardb`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: congelardb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idclientes` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `cpf` varchar(45) NOT NULL,
  `cep` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nascimento` varchar(45) NOT NULL,
  `banco` varchar(45) NOT NULL,
  `agencia` varchar(45) NOT NULL,
  `corrente` varchar(45) NOT NULL,
  `prazo` varchar(45) NOT NULL,
  PRIMARY KEY (`idclientes`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (17,'Cliente 1','111.111.111-11','11111-111','Rua 1','cidade 1','estado 1','(11) 11111-1111','11111@1111.com.br','0111-11-11','1','123','1234','1');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientespj`
--

DROP TABLE IF EXISTS `clientespj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientespj` (
  `idclientespj` int(11) NOT NULL AUTO_INCREMENT,
  `empresa` varchar(45) NOT NULL,
  `fantasia` varchar(45) NOT NULL,
  `cnpj` varchar(45) NOT NULL,
  `estadual` varchar(45) NOT NULL,
  `municipal` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `banco` varchar(45) NOT NULL,
  `agencia` varchar(45) NOT NULL,
  `corrente` varchar(45) NOT NULL,
  `faturamento` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `prazo` varchar(45) NOT NULL,
  PRIMARY KEY (`idclientespj`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientespj`
--

LOCK TABLES `clientespj` WRITE;
/*!40000 ALTER TABLE `clientespj` DISABLE KEYS */;
INSERT INTO `clientespj` VALUES (14,'Empresa 1','Empresa 1','11.111.111/1111-11','1111','1111','Cliente 1','Cargo 1','(11) 11111-1111','11111@11111.com.br','1','123','123456','11.111.111/1111-11','Rua 1','1');
/*!40000 ALTER TABLE `clientespj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escopoclientepf`
--

DROP TABLE IF EXISTS `escopoclientepf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escopoclientepf` (
  `idescopocliente` int(11) NOT NULL AUTO_INCREMENT,
  `escopocliente` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) NOT NULL,
  PRIMARY KEY (`idescopocliente`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escopoclientepf`
--

LOCK TABLES `escopoclientepf` WRITE;
/*!40000 ALTER TABLE `escopoclientepf` DISABLE KEYS */;
/*!40000 ALTER TABLE `escopoclientepf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escopoclientepj`
--

DROP TABLE IF EXISTS `escopoclientepj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escopoclientepj` (
  `idescopocliente` int(11) NOT NULL AUTO_INCREMENT,
  `escopocliente` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) NOT NULL,
  PRIMARY KEY (`idescopocliente`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escopoclientepj`
--

LOCK TABLES `escopoclientepj` WRITE;
/*!40000 ALTER TABLE `escopoclientepj` DISABLE KEYS */;
/*!40000 ALTER TABLE `escopoclientepj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escopocongelarpf`
--

DROP TABLE IF EXISTS `escopocongelarpf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escopocongelarpf` (
  `idescopocongelar` int(11) NOT NULL AUTO_INCREMENT,
  `escopocongelar` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`idescopocongelar`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escopocongelarpf`
--

LOCK TABLES `escopocongelarpf` WRITE;
/*!40000 ALTER TABLE `escopocongelarpf` DISABLE KEYS */;
/*!40000 ALTER TABLE `escopocongelarpf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escopocongelarpj`
--

DROP TABLE IF EXISTS `escopocongelarpj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `escopocongelarpj` (
  `idescopocongelar` int(11) NOT NULL AUTO_INCREMENT,
  `escopocongelar` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`idescopocongelar`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escopocongelarpj`
--

LOCK TABLES `escopocongelarpj` WRITE;
/*!40000 ALTER TABLE `escopocongelarpj` DISABLE KEYS */;
/*!40000 ALTER TABLE `escopocongelarpj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orcamentopf`
--

DROP TABLE IF EXISTS `orcamentopf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orcamentopf` (
  `idorcamentopf` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(45) DEFAULT NULL,
  `nomepf` varchar(45) DEFAULT NULL,
  `telefonepf` varchar(45) DEFAULT NULL,
  `enderecopf` varchar(45) DEFAULT NULL,
  `emailpf` varchar(45) DEFAULT NULL,
  `condicoes` varchar(45) DEFAULT NULL,
  `execucao` varchar(45) DEFAULT NULL,
  `garantia` varchar(45) DEFAULT NULL,
  `proposta` varchar(45) DEFAULT NULL,
  `aprovacao` varchar(45) DEFAULT 'Aguardando',
  `datapf` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorcamentopf`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orcamentopf`
--

LOCK TABLES `orcamentopf` WRITE;
/*!40000 ALTER TABLE `orcamentopf` DISABLE KEYS */;
/*!40000 ALTER TABLE `orcamentopf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orcamentopj`
--

DROP TABLE IF EXISTS `orcamentopj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orcamentopj` (
  `idorcamentopj` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(45) DEFAULT NULL,
  `nomeempresa` varchar(45) DEFAULT NULL,
  `representante` varchar(45) DEFAULT NULL,
  `telefonepj` varchar(45) DEFAULT NULL,
  `emailpj` varchar(45) DEFAULT NULL,
  `enderecopj` varchar(45) DEFAULT NULL,
  `condicoes` varchar(45) DEFAULT NULL,
  `execucao` varchar(45) DEFAULT NULL,
  `garantia` varchar(45) DEFAULT NULL,
  `proposta` varchar(45) DEFAULT NULL,
  `aprovacao` varchar(45) DEFAULT 'Aguardando',
  `datapj` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idorcamentopj`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orcamentopj`
--

LOCK TABLES `orcamentopj` WRITE;
/*!40000 ALTER TABLE `orcamentopj` DISABLE KEYS */;
/*!40000 ALTER TABLE `orcamentopj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicopf`
--

DROP TABLE IF EXISTS `servicopf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicopf` (
  `idservicopf` int(11) NOT NULL AUTO_INCREMENT,
  `idclientepf` varchar(45) DEFAULT NULL,
  `boleto` varchar(60) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'Em Andamento',
  `dataconclusao` varchar(45) DEFAULT NULL,
  `vencimento` varchar(45) DEFAULT NULL,
  `valor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idservicopf`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicopf`
--

LOCK TABLES `servicopf` WRITE;
/*!40000 ALTER TABLE `servicopf` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicopf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicopj`
--

DROP TABLE IF EXISTS `servicopj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicopj` (
  `idservicopj` int(11) NOT NULL AUTO_INCREMENT,
  `idclientepj` varchar(45) DEFAULT NULL,
  `boleto` varchar(60) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'Em Andamento',
  `dataconclusao` varchar(45) DEFAULT NULL,
  `vencimento` varchar(45) DEFAULT NULL,
  `valor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idservicopj`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicopj`
--

LOCK TABLES `servicopj` WRITE;
/*!40000 ALTER TABLE `servicopj` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicopj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabelapf`
--

DROP TABLE IF EXISTS `tabelapf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabelapf` (
  `idtabela` int(11) NOT NULL AUTO_INCREMENT,
  `tabelaqtd` varchar(200) DEFAULT NULL,
  `tabeladescricao` varchar(200) DEFAULT NULL,
  `tabelavalor` varchar(200) DEFAULT NULL,
  `tabelaparcela` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) DEFAULT NULL,
  `tabeladesconto` varchar(200) DEFAULT NULL,
  `tabelanovovalor` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idtabela`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabelapf`
--

LOCK TABLES `tabelapf` WRITE;
/*!40000 ALTER TABLE `tabelapf` DISABLE KEYS */;
/*!40000 ALTER TABLE `tabelapf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabelapj`
--

DROP TABLE IF EXISTS `tabelapj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabelapj` (
  `idtabela` int(11) NOT NULL AUTO_INCREMENT,
  `tabelaqtd` varchar(200) DEFAULT NULL,
  `tabeladescricao` varchar(200) DEFAULT NULL,
  `tabelavalor` varchar(200) DEFAULT NULL,
  `tabelaparcela` varchar(200) DEFAULT NULL,
  `idorcamento` int(11) DEFAULT NULL,
  `tabeladesconto` varchar(200) DEFAULT NULL,
  `tabelanovovalor` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idtabela`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabelapj`
--

LOCK TABLES `tabelapj` WRITE;
/*!40000 ALTER TABLE `tabelapj` DISABLE KEYS */;
/*!40000 ALTER TABLE `tabelapj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `funcao` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `perfil` varchar(45) NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (16,'Ernandes','Souza','323446','Gerente','32344609814','Administrador'),(17,'Raquel ','Correia de souza','233397','Gerente','23339784817','Administrador'),(18,'Talita','Santos Gomes de Araujo','483966','Gerente','48396697833','Administrador'),(19,'Luis Thiago','Silva de Araujo','391257','Gerente','39125758861','Administrador'),(20,'Bruno','Ferreira Leonel Costa','085910','TI','08591039602','Administrador');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'congelardb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-29 16:48:43
