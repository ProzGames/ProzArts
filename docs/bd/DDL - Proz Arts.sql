/*Data Definition Language*/

create table comunidade (
  id SERIAL primary key,
  nome VARCHAR(50) NOT NULL
);

create table forum(
  id SERIAL PRIMARY KEY,
  comunidade_id INT NOT NULL,
  nome VARCHAR(24) NOT NULL,
  link VARCHAR(100),
  descricao VARCHAR(500),
  capa VARCHAR(100),
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id)
);

create table servidor(
  id SERIAL PRIMARY KEY,
  comunidade_id INT NOT NULL,
  nome VARCHAR(24) NOT NULL,
  link VARCHAR(100),
  capa VARCHAR(100),
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id)
);

create table plataforma (
  id SERIAL PRIMARY KEY,
  tipo VARCHAR(20) not NULL
);

create table jogo(
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50),
  link VARCHAR(100),
  capa VARCHAR(100),
  categoria VARCHAR(24)
);

create table jogos_disponiveis_na_plataforma (
  plataforma_id INT NOT NULL,
  jogo_id INT NOT NULL,
  CONSTRAINT pk_jogos_disponiveis_na_plataforma PRIMARY KEY (plataforma_id,jogo_id),
  CONSTRAINT fk_plataforma FOREIGN KEY(plataforma_id) REFERENCES plataforma(id),
  CONSTRAINT fk_jogo FOREIGN KEY (jogo_id) REFERENCES jogo(id)
);

create table noticia(
  id SERIAL PRIMARY KEY,
  dt_criacao DATE not NULL,
  descricao VARCHAR(500) not NULL
);

create table biblioteca(
  id SERIAL PRIMARY KEY,
  comunidade_id INT NOT NULL,
  preferencias VARCHAR(20) not NULL,
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id)
);
/*DROP TABLE biblioteca;*/

CREATE table biblioteca_tem_noticia(
  biblioteca_id INT NOT NULL,
  noticia_id INT NOT NULL,
  comunidade_id INT NOT NULL,
  CONSTRAINT pk_biblioteca_tem_noticia primary key(biblioteca_id,noticia_id),
  CONSTRAINT fk_biblioteca FOREIGN KEY(biblioteca_id) REFERENCES biblioteca(id),
  CONSTRAINT fk_noticia FOREIGN KEY (noticia_id) REFERENCES noticia(id),
  CONSTRAINT fk_comunidade FOREIGN KEY (comunidade_id) REFERENCES comunidade(id)
);
/*DROP TABLE biblioteca_tem_noticia;*/

create table meus_jogos(
  biblioteca_id INT NOT NULL,
  comunidade_id INT NOT NULL,
  jogo_id INT NOT NULL,
  CONSTRAINT pk_meus_jogos primary key (biblioteca_id,jogo_id),
  CONSTRAINT fk_jogo FOREIGN KEY(jogo_id) REFERENCES jogo(id),
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id),
  CONSTRAINT fk_biblioteca FOREIGN KEY(biblioteca_id) REFERENCES biblioteca(id)
);

create table usuario(
  id SERIAL PRIMARY KEY,
  biblioteca_id INT NOT NULL,
  comunidade_id int NOT NULL,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  data_nascimento DATE NOT NULL,
  cadastro_completo BOOLEAN NOT NULL,
  CONSTRAINT fk_biblioteca FOREIGN KEY(biblioteca_id) REFERENCES biblioteca(id),
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id)
);
/*drop table usuario;*/

create table usuario_Assina_noticia(
  noticia_id INT NOT NULL,
  usuario_id INT NOT NULL,
  biblioteca_id INT NOT NULL,
  comunidade_id INT NOT NULL,
  CONSTRAINT pk_usuario_Assina_noticia PRIMARY key(noticia_id,usuario_id),
  CONSTRAINT fk_biblioteca FOREIGN KEY(biblioteca_id) REFERENCES biblioteca(id),
  CONSTRAINT fk_usuario FOREIGN KEY(usuario_id) REFERENCES usuario(id),
  CONSTRAINT fk_noticia FOREIGN KEY(noticia_id) REFERENCES noticia(id),
  CONSTRAINT fk_comunidade FOREIGN KEY(comunidade_id) REFERENCES comunidade(id)
);
