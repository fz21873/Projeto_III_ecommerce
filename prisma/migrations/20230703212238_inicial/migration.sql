-- CreateTable
CREATE TABLE `labecommer_users` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `age` INTEGER NOT NULL,

    UNIQUE INDEX `labecommer_users_id_key`(`id`),
    UNIQUE INDEX `labecommer_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `labecommerce_products` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DOUBLE NOT NULL,

    UNIQUE INDEX `labecommerce_products_id_key`(`id`),
    UNIQUE INDEX `labecommerce_products_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `labecommerce_purchases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(255) NOT NULL,
    `product_id` VARCHAR(255) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `total_amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `labecommerce_tickes` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DOUBLE NOT NULL,
    `origin` VARCHAR(255) NOT NULL,
    `destination` VARCHAR(255) NOT NULL,
    `product_id` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `labecommerce_tickes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `labecommerce_purchases` ADD CONSTRAINT `labecommerce_purchases_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `labecommer_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `labecommerce_purchases` ADD CONSTRAINT `labecommerce_purchases_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `labecommerce_products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `labecommerce_tickes` ADD CONSTRAINT `labecommerce_tickes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `labecommerce_products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
