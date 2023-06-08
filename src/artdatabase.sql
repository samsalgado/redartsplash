DROP DATABASE IF EXISTS `sql_art`;
CREATE DATABASE `sql_art`;
USE `sql_art`;

CREATE TABLE `artpieces` (
    `art_id` int(11) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `in_stock` VARCHAR(50) NOT NULL,
    `price` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`art_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `artpieces` VALUES (1,'Lost in Meditation',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        2,
        'Deep Thoughts',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        3,
        'Laura',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        4,
        'Matching Cousins',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        5,
        'We The People',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        6,
        'Entangled',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        7,
        'Ruby',
        'YES',
        '350'
    );
    INSERT INTO `artpieces`
VALUES (
        8,
        'On Stage',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        9,
        'My Pain In The Rain',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        10,
        'Ella',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        11,
        'Saint Tropez',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        12,
        'Victory Lap',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        13,
        'The Deep End',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        14,
        'Every Woman',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (15, 'Promotion', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (16, 'Rhythm On My Mind', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (17, 'Collectively We See', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (18, 'The Pursuit of Justice', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (19, 'On My Mind', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (20, 'Death By A Thousand Cuts', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (21, 'Advice To My Daughter', 'NO', 'SOLD');
INSERT INTO `artpieces`
VALUES (
        22,
        'The Hope Of A Generation',
        'YES',
        '350'
    );
    INSERT INTO `artpieces`
VALUES (
        23,
        'Street Life',
        'YES',
        '350'
    );
INSERT INTO `artpieces`
VALUES (
        24,
        'Sculpted',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        25,
        'The Confident Woman',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        26,
        'The Waiting Room',
        'YES',
        '350'
    );
    INSERT INTO `artpieces`
VALUES (
        27,
        'Joy Expressed',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        28,
        'Spirit Man',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        29,
        'Hiding',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        30,
        'Overcome With Grief',
        'YES',
        '400'
    );
    INSERT INTO `artpieces`
VALUES (
        31,
        'The Wahoo Catch',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        32,
        'The Family United',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        33,
        'We The People',
        'NO',
        'SOLD'
    );
    INSERT INTO `artpieces`
VALUES (
        34,
        'We March',
        'NO',
        'SOLD'
    );
    SELECT * FROM artpieces WHERE in_stock > 'YES';
