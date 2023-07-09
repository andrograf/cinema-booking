-- CreateTable
CREATE TABLE `Room` (
    `room_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `Room_name_key`(`name`),
    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chair` (
    `chair_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `status` VARCHAR(45) NOT NULL DEFAULT 'szabad',
    `reservation_startdate` DATETIME NULL,
    `reservation_enddate` DATETIME NULL,
    `room_id` INTEGER NOT NULL,

    INDEX `room_id_idx`(`room_id`),
    PRIMARY KEY (`chair_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Chair` ADD CONSTRAINT `Chair_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Room`(`room_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
