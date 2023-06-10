-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema aprata
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aprata
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aprata` DEFAULT CHARACTER SET utf8 ;
USE `aprata` ;
-- -----------------------------------------------------
-- Table `aprata`.`pessoa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`pessoa` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(80) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(60) NOT NULL,
  `bairro` VARCHAR(60) NOT NULL,
  `cidade` VARCHAR(60) NOT NULL,
  `cep` VARCHAR(10) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`aluno` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `rg` VARCHAR(20) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `nome_mae` VARCHAR(60) NOT NULL,
  `dt_nasc` DATE NOT NULL,
  `escola` VARCHAR(60) NULL DEFAULT NULL,
  `serie` VARCHAR(10) NULL DEFAULT NULL,
  `periodo` VARCHAR(10) NULL DEFAULT NULL,
  `Pessoa_codigo` INT(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC),
  UNIQUE INDEX `rg_UNIQUE` (`rg` ASC),
  INDEX `fk_Aluno_Pessoa1_idx` (`Pessoa_codigo` ASC),
  CONSTRAINT `fk_Aluno_Pessoa1`
    FOREIGN KEY (`Pessoa_codigo`)
    REFERENCES `aprata`.`pessoa` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`cargo` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(299) NULL DEFAULT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`curso` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `sala` VARCHAR(45) NULL DEFAULT NULL,
  `eixo` VARCHAR(45) NULL DEFAULT NULL,
  `carga_h` VARCHAR(45) NULL DEFAULT NULL,
  `dt_criacao` VARCHAR(10) NULL DEFAULT NULL,
  `dt_desativacao` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB
AUTO_INCREMENT = 29
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`empresa` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `cnpj` VARCHAR(45) NOT NULL,
  `ie` VARCHAR(45) NOT NULL,
  `proprietario` VARCHAR(80) NULL DEFAULT NULL,
  `Pessoa_codigo` INT(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC),
  UNIQUE INDEX `ie_UNIQUE` (`ie` ASC),
  INDEX `fk_Empresa_Pessoa1_idx` (`Pessoa_codigo` ASC),
  CONSTRAINT `fk_Empresa_Pessoa1`
    FOREIGN KEY (`Pessoa_codigo`)
    REFERENCES `aprata`.`pessoa` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 33
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`funcionario` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(20) NOT NULL,
  `dt_nasc` DATE NOT NULL,
  `dt_admissao` DATE NOT NULL,
  `dt_demissao` DATE DEFAULT NULL,
  `status` varchar (10) NOT NULL,
  `nome_usuario` VARCHAR(45) NULL DEFAULT NULL,
  `senha_usuario` VARCHAR(45) NULL DEFAULT NULL,
  `Cargo_codigo` INT(11) NOT NULL,
  `Pessoa_codigo` INT(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC),
  UNIQUE INDEX `nome_usuario_UNIQUE` (`nome_usuario` ASC),
  INDEX `fk_Funcionario_Cargo1_idx` (`Cargo_codigo` ASC),
  INDEX `fk_Funcionario_Pessoa1_idx` (`Pessoa_codigo` ASC),
  CONSTRAINT `fk_Funcionario_Cargo1`
    FOREIGN KEY (`Cargo_codigo`)
    REFERENCES `aprata`.`cargo` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Funcionario_Pessoa1`
    FOREIGN KEY (`Pessoa_codigo`)
    REFERENCES `aprata`.`pessoa` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
-- -----------------------------------------------------
-- Table `aprata`.`turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aprata`.`turma` (
  `codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `periodo` VARCHAR(10) NOT NULL,
  `ano_letivo` VARCHAR(4) NOT NULL,
  `dt_inicio` DATE NOT NULL,
  `dt_fim` DATE NOT NULL,
  `status` VARCHAR(10) NULL DEFAULT NULL,
  `vagas` INT(11) NOT NULL,
  `Funcionario_codigo` INT(11) NOT NULL,
  `Curso_codigo` INT(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_Turma_Funcionario1_idx` (`Funcionario_codigo` ASC),
  INDEX `fk_Turma_Curso1_idx` (`Curso_codigo` ASC),
  CONSTRAINT `fk_Turma_Curso1`
    FOREIGN KEY (`Curso_codigo`)
    REFERENCES `aprata`.`curso` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Turma_Funcionario1`
    FOREIGN KEY (`Funcionario_codigo`)
    REFERENCES `aprata`.`funcionario` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;