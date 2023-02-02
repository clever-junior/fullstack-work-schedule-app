/*
  Warnings:

  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserOnDepartment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnDepartment" DROP CONSTRAINT "UserOnDepartment_department_id_fkey";

-- DropForeignKey
ALTER TABLE "UserOnDepartment" DROP CONSTRAINT "UserOnDepartment_user_id_fkey";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "UserOnDepartment";

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_departments" (
    "user_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_departments_pkey" PRIMARY KEY ("user_id","department_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "departments_id_key" ON "departments"("id");

-- AddForeignKey
ALTER TABLE "users_departments" ADD CONSTRAINT "users_departments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_departments" ADD CONSTRAINT "users_departments_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
