-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOnDepartment" (
    "user_id" TEXT NOT NULL,
    "department_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserOnDepartment_pkey" PRIMARY KEY ("user_id","department_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_id_key" ON "Department"("id");

-- AddForeignKey
ALTER TABLE "UserOnDepartment" ADD CONSTRAINT "UserOnDepartment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnDepartment" ADD CONSTRAINT "UserOnDepartment_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
