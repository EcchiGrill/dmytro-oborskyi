-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Admin" (
    "uid" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Project" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "FeaturedProject" (
    "uid" TEXT NOT NULL,

    CONSTRAINT "FeaturedProject_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedProject" ADD CONSTRAINT "FeaturedProject_uid_fkey" FOREIGN KEY ("uid") REFERENCES "Project"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
