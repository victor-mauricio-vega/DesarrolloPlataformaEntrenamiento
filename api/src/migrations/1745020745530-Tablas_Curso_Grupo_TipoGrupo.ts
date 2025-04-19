import { MigrationInterface, QueryRunner } from "typeorm";

export class TablasCursoGrupoTipoGrupo1745020745530 implements MigrationInterface {
    name = 'TablasCursoGrupoTipoGrupo1745020745530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CURSO" ("PK_CURSO" int NOT NULL IDENTITY(1,1), "SIGLA" nvarchar(50) NOT NULL, "NOMBRE" nvarchar(100) NOT NULL, "INTENSIDAD" int NOT NULL, "ESTADO" bit NOT NULL, "ESTADO_MATERIAL" bit NOT NULL, "FECHA_LANZAMIENTO" date, "TIPO" nvarchar(50) NOT NULL, "IDIOMA" nvarchar(50), "ORGANIZACION" nvarchar(50), "ACRONIMO" nvarchar(50), "VER_PLATAFORMA" nvarchar(50), "VER_MATERIAL" nvarchar(50), "CATEGORIA" nvarchar(100), CONSTRAINT "PK_CURSO" PRIMARY KEY ("PK_CURSO"))`);
        await queryRunner.query(`CREATE INDEX "IXAX_SIGLA" ON "CURSO" ("SIGLA") `);
        await queryRunner.query(`CREATE TABLE "TIPO_GRUPO" ("PK_TIPO_GRUPO" int NOT NULL IDENTITY(1,1), "NOMBRE" varchar(50) NOT NULL, CONSTRAINT "PK_TIPO_GRUPO" PRIMARY KEY ("PK_TIPO_GRUPO"))`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FECHA_INICIO" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FECHA_FIN" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "TIPO" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "ALCANCE" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "ENTREGA_MODIFICADA" bit`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "INFORME" nvarchar(max)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FK_CURSO" int`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FK_TIPO_GRUPO" int`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD CONSTRAINT "FK_GRUPO_CURSO" FOREIGN KEY ("FK_CURSO") REFERENCES "CURSO"("PK_CURSO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD CONSTRAINT "FK_GRUPO_TIPO_GRUPO" FOREIGN KEY ("FK_TIPO_GRUPO") REFERENCES "TIPO_GRUPO"("PK_TIPO_GRUPO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP CONSTRAINT "FK_GRUPO_TIPO_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP CONSTRAINT "FK_GRUPO_CURSO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FK_TIPO_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FK_CURSO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "INFORME"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "ENTREGA_MODIFICADA"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "ALCANCE"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "TIPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FECHA_FIN"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FECHA_INICIO"`);
        await queryRunner.query(`DROP TABLE "TIPO_GRUPO"`);
        await queryRunner.query(`DROP INDEX "IXAX_SIGLA" ON "CURSO"`);
        await queryRunner.query(`DROP TABLE "CURSO"`);
    }

}
