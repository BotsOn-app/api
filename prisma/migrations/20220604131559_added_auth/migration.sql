-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "accessToken" VARCHAR(55) NOT NULL,
    "refreshToken" VARCHAR(55) NOT NULL,
    "expiresIn" BIGINT NOT NULL,
    "userId" VARCHAR(55) NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);
