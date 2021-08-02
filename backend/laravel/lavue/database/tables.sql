use bands;

drop table bands;
CREATE TABLE `bands` (
  `id` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `debut` smallint(6) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_with_id` (`id`,`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table albums;
CREATE TABLE `albums` (
  `id` varchar(128) NOT NULL,
  `bandId` varchar(128) NOT NULL,
  `title` varchar(128) NOT NULL,
  `released` smallint(6) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_with_title` (`id`,`title`) USING BTREE,
  UNIQUE KEY `id_with_band` (`id`,`bandId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table songs;
CREATE TABLE `songs` (
  `id` varchar(128) NOT NULL,
  `albumId` varchar(128) NOT NULL,
  `bandId` varchar(128) NOT NULL,
  `title` varchar(256) NOT NULL,
  `playTime` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_albumId_bandId` (`id`,`albumId`,`bandId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
