
- JWT에 기반한 로그인 시스템이 있어야 합니다.
  - 로그인시 jwt 토큰 발행합니다
  - 발행된 토큰 access-token 의 키값으로 헤더에 넣고 사용합니다
- 상품 정보에 관한 CRUD가 모두 있어야 합니다. (상품 리스트, 상품 상세, 상품 생성, 상품 수정, 상품 삭제)
  - 상품 등록, 수정
    - 상품 이름, 설명, 브랜드 값을 넣어 등록합니다
  - 상품 옵션 등록,수정
    - 상품 가격, 사이즈, 수량, 색 정보를 등록 수정 합니다
- 상품 정보에 필요한 항목은 상품 이름, 상품 설명, 상품 브랜드, 상품 가격, 상품 사이즈, 상품 색상입니다.
- 최소 3개 이상의 필터링이 구현된 상품 목록이 있어야 합니다.
  - queryString 을 활용하여 이름, 브랜드, 색상을 필터링 합니다
- 최소 3개 이상의 정렬이 구현된 상품 목록이 있어야 합니다.
  - queryString 을 활용하여 이름, 판매수, 좋아요 수, 가격을 오름차순 내림차순으로 정렬합니다
- 리뷰, 좋아요 등 유저 관련 기능이 1개 이상 포함되어야 합니다.
  - 좋아요 기능 미완성(상품 좋아요,취소 까지 가능)
- 프레임워크는 Nest.JS, 언어는 Typescript를 사용합니다.
- ORM 사용 가능합니다. (TypeORM, Sequelize)

Table

create table users
(
email    varchar(50),
name     varchar(20),
nickname varchar(30),
age      integer,
gender   integer,
id       serial
primary key,
password varchar(60)
);

alter table users
owner to postgres;

create table brand
(
id   serial
primary key,
name varchar(30)
);

alter table brand
owner to postgres;

create table product
(
id          serial
primary key,
name        varchar(50) not null
constraint product_pk
unique,
description varchar(300),
brand_id    integer     not null
constraint fk_brand
references brand,
state       boolean default false,
acc_sales   integer,
like_count  integer default 0
);

alter table product
owner to postgres;

create table option
(
product_id integer
constraint fk_product
references product,
price      integer,
size       integer,
color      integer,
id         serial
primary key,
ea         integer default 0,
constraint option_pk
unique (size, product_id)
);

alter table option
owner to postgres;

create table review
(
review     text,
product_id integer
constraint fk_product
references product,
option_id  integer
constraint fk_option
references option,
user_id    integer
);

alter table review
owner to postgres;

