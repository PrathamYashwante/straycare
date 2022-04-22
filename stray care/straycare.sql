create table post (
    id bigserial not null primary key,
    postdesc varchar(500) not null,
    contactno bigint not null,
    postlocation varchar(300) not null,
    animaltype varchar(100) not null
);



insert into post values(1, 'Injured Dog',9867845453, 'Mumbai', 'Dog');



alter table 