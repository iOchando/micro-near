import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1695824569461 implements MigrationInterface {
    name = 'Migration1695824569461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wallets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "address" character varying NOT NULL, "private_key" character varying NOT NULL, "public_key" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_92558c08091598f7a4439586cda" UNIQUE ("user_id"), CONSTRAINT "UQ_f907d5fd09a9d374f1da4e13bd3" UNIQUE ("address"), CONSTRAINT "UQ_591d5a477f2dd20541336b9d10f" UNIQUE ("private_key"), CONSTRAINT "UQ_819b5d3328859cc8802df3151ea" UNIQUE ("public_key"), CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wallets"`);
    }

}
