-- CreateTable
CREATE TABLE "Project" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "git_link" TEXT,
    "img_desktop" TEXT,
    "img_laptop" TEXT,
    "img_mobile" TEXT,
    "order" INTEGER,
    "img" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "FeaturedProject" (
    "uid" TEXT NOT NULL,

    CONSTRAINT "FeaturedProject_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_order_key" ON "Project"("order");

-- AddForeignKey
ALTER TABLE "FeaturedProject" ADD CONSTRAINT "FeaturedProject_uid_fkey" FOREIGN KEY ("uid") REFERENCES "Project"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
