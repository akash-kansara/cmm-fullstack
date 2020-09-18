## Database configuration for [CMM Fullstack](https://github.com/akash-kansara/cmm-fullstack)

## MySQL config

#### Step 1: Open MySQL CLI
```bash
mysql -u root -p
```

#### Step 2.1: Create database
```sql
CREATE DATABASE `cmm-fullstack`;
```

#### Step 2.2: Switch database
```sql
USE `cmm-fullstack`;
```

#### Step 4.1: Create user for database
```sql
CREATE USER 'node_user'@'%' IDENTIFIED WITH mysql_native_password BY 'node_pass';
```

#### Step 4.2: Grant access to user
```sql
GRANT ALL PRIVILEGES ON `cmm-fullstack`.*  TO 'node_user'@'%';
```

#### Step 4.3: Refersh user priveleges
```sql
FLUSH PRIVILEGES;
```

#### Step 5: Create tables
```sql
CREATE TABLE `user_mst` (
  `id` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `avatar` varchar(200),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_user_mst_id` (`id`)
);
CREATE TABLE `friends` (
  `id` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `friend_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_friends_id` (`id`),
  KEY `fk_friends_user_id_idx` (`user_id`),
  KEY `fk_friends_friend_id_idx` (`friend_id`),
  CONSTRAINT `fk_friends_friend_id` FOREIGN KEY (`friend_id`) REFERENCES `user_mst` (`id`),
  CONSTRAINT `fk_friends_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_mst` (`id`)
);
```
##