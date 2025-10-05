/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `business_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `company_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `innovation_focus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `interests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offerings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `partnership_interests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personal_info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `startup_profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `technology_interests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_user_id_fkey";

-- DropForeignKey
ALTER TABLE "business_details" DROP CONSTRAINT "business_details_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "company_details" DROP CONSTRAINT "company_details_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "innovation_focus" DROP CONSTRAINT "innovation_focus_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "interests" DROP CONSTRAINT "interests_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "offerings" DROP CONSTRAINT "offerings_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "partnership_interests" DROP CONSTRAINT "partnership_interests_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "personal_info" DROP CONSTRAINT "personal_info_startup_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "startup_profiles" DROP CONSTRAINT "startup_profiles_user_id_fkey";

-- DropForeignKey
ALTER TABLE "technology_interests" DROP CONSTRAINT "technology_interests_startup_profile_id_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "business_details";

-- DropTable
DROP TABLE "company_details";

-- DropTable
DROP TABLE "innovation_focus";

-- DropTable
DROP TABLE "interests";

-- DropTable
DROP TABLE "offerings";

-- DropTable
DROP TABLE "partnership_interests";

-- DropTable
DROP TABLE "personal_info";

-- DropTable
DROP TABLE "posts";

-- DropTable
DROP TABLE "startup_profiles";

-- DropTable
DROP TABLE "technology_interests";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "UserSubmission" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSubmission_email_key" ON "UserSubmission"("email");
