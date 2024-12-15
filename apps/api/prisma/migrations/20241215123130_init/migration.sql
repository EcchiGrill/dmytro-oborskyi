-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_uid_fkey";

-- DropForeignKey
ALTER TABLE "FeaturedProjects" DROP CONSTRAINT "FeaturedProjects_uid_fkey";

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedProjects" ADD CONSTRAINT "FeaturedProjects_uid_fkey" FOREIGN KEY ("uid") REFERENCES "Projects"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
