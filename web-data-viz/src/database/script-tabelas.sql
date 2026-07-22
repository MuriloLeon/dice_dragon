-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE dice_dragon;
DROP DATABASE dice_dragon;

USE dice_dragon;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE personagem (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table rolagem_definida (
	id INT AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(45),
    fk_personagem int,
    primary key(id, fk_personagem),
    FOREIGN KEY (fk_personagem) REFERENCES personagem(id)
);	

create table rolagem (
	id INT AUTO_INCREMENT,
	categoria VARCHAR(45),
    quantidade INT,
	tipoDado VARCHAR(3),
	bonus INT,
    tipoRolagem VARCHAR(45),
    fk_rolagem INT,
    primary key(id, fk_rolagem),
    foreign key (fk_rolagem) references rolagem_definida(id)
);

create table resultados (
	id INT PRIMARY KEY auto_increment,
    resultadoDado INT,
    resultadoFinal INT,
    tipoDado VARCHAR(45),
    tipoRolagem Varchar(45),
    dtRolagem datetime default current_timestamp,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);