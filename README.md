# node-api-posgres
back en node con BD en Posgres
-- Database: 11_libros


create table generos(
GeneroId SERIAL PRIMARY KEY,
GeneroNombre varchar(500)
);

insert into generos(GeneroNombre) values ('viajes');
insert into generos(GeneroNombre) values ('históricas');
insert into generos(GeneroNombre) values ('misterio');


create table libros(
LibroID SERIAL PRIMARY KEY,
LibroTitulo varchar(500),
LibroAutor varchar(500),
Genero varchar(500),
PortadaLibro varchar(500)
);


insert into libros(LibroTitulo, LibroAutor, Genero, PortadaLibro) 
values ('Cinco semanas en globo', 'Julio Verne' , 'viajes', 'anonymous.png');
