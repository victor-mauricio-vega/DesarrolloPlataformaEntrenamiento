import { MigrationInterface, QueryRunner } from "typeorm";

export class TablasCursoGrupoTipoGrupo1745020251152 implements MigrationInterface {
    name = 'TablasCursoGrupoTipoGrupo1745020251152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CURSO" ("PK_CURSO" int NOT NULL IDENTITY(1,1), "sigla" nvarchar(50) NOT NULL, "nombre" nvarchar(100) NOT NULL, "intensidad" int NOT NULL, "estado" nvarchar(50) NOT NULL, "estado_material" nvarchar(50) NOT NULL, "fecha_lanzamiento" date, "tipo" nvarchar(50) NOT NULL, "idioma" nvarchar(50), "organizacion" nvarchar(50), "acronimo" nvarchar(50), "ver_plataforma" nvarchar(50), "ver_material" nvarchar(50), "categoria" nvarchar(100), CONSTRAINT "PK_CURSO" PRIMARY KEY ("PK_CURSO"))`);
        await queryRunner.query(`CREATE TABLE "TIPO_GRUPO" ("PK_TIPO_GRUPO" int NOT NULL IDENTITY(1,1), "NOMBRE" varchar(50) NOT NULL, CONSTRAINT "PK_TIPO_GRUPO" PRIMARY KEY ("PK_TIPO_GRUPO"))`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FECHA_INICIO" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FECHA_FIN" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "TIPO" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "ALCANCE" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "ENTREGA_MODIFICADA" bit`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "INFORME" nvarchar(max)`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "fk_curso" int`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD "FK_TIPO_GRUPO" int`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD CONSTRAINT "FK_GRUPO_CURSO" FOREIGN KEY ("fk_curso") REFERENCES "CURSO"("PK_CURSO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRUPO" ADD CONSTRAINT "FK_GRUPO_TIPO_GRUPO" FOREIGN KEY ("FK_TIPO_GRUPO") REFERENCES "TIPO_GRUPO"("PK_TIPO_GRUPO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP CONSTRAINT "FK_GRUPO_TIPO_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP CONSTRAINT "FK_GRUPO_CURSO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FK_TIPO_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "fk_curso"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "INFORME"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "ENTREGA_MODIFICADA"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "ALCANCE"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "TIPO"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FECHA_FIN"`);
        await queryRunner.query(`ALTER TABLE "GRUPO" DROP COLUMN "FECHA_INICIO"`);
        await queryRunner.query(`DROP TABLE "TIPO_GRUPO"`);
        await queryRunner.query(`DROP TABLE "CURSO"`);
    }

}
