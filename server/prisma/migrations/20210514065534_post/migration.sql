-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "caption" TEXT NOT NULL DEFAULT E'',
    "image_url" TEXT NOT NULL DEFAULT E'https://cdn4.iconfinder.com/data/icons/basic-ui-set-2-1/64/Basic_ui_2-16-512.png',

    PRIMARY KEY ("id")
);
