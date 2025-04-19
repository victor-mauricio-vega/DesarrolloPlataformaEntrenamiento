import { MigrationInterface, QueryRunner } from "typeorm";

export class CorreccionAutoincrementalGrupoEnClase1745024212889 implements MigrationInterface {
    name = 'CorreccionAutoincrementalGrupoEnClase1745024212889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "plataforma.dbo.GRUPO.fk_curso", "FK_CURSO"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "sigla"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "intensidad"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "estado_material"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "fecha_lanzamiento"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "idioma"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "organizacion"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "acronimo"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ver_plataforma"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ver_material"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "categoria"`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "SIGLA" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "NOMBRE" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "INTENSIDAD" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ESTADO" bit NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ESTADO_MATERIAL" bit NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "FECHA_LANZAMIENTO" date`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "TIPO" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "IDIOMA" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ORGANIZACION" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ACRONIMO" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "VER_PLATAFORMA" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "VER_MATERIAL" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "CATEGORIA" nvarchar(100)`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP COLUMN "TIPO_DOC"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD "TIPO_DOC" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" DROP CONSTRAINT "PK_TIPO_DOCUMENTO"`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" DROP COLUMN "PK_TIPO_DOCUMENTO"`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" ADD "PK_TIPO_DOCUMENTO" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" ADD CONSTRAINT "PK_TIPO_DOCUMENTO" PRIMARY KEY ("PK_TIPO_DOCUMENTO")`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "FK_CLASE_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "pk_clase"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante")`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP COLUMN "pfk_grupo"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD "pfk_grupo" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "pk_clase"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante", "pfk_grupo")`);
        await queryRunner.query(`CREATE INDEX "IXAX_SIGLA" ON "CURSO" ("SIGLA") `);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO" FOREIGN KEY ("TIPO_DOC") REFERENCES "TIPO_DOCUMENTO"("PK_TIPO_DOCUMENTO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "FK_CLASE_GRUPO" FOREIGN KEY ("pfk_grupo") REFERENCES "GRUPO"("PK_GRUPO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "FK_CLASE_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO"`);
        await queryRunner.query(`DROP INDEX "IXAX_SIGLA" ON "CURSO"`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "pk_clase"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante")`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP COLUMN "pfk_grupo"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD "pfk_grupo" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "pk_clase"`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante", "pfk_grupo")`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "FK_CLASE_GRUPO" FOREIGN KEY ("pfk_grupo") REFERENCES "GRUPO"("PK_GRUPO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" DROP CONSTRAINT "PK_TIPO_DOCUMENTO"`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" DROP COLUMN "PK_TIPO_DOCUMENTO"`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" ADD "PK_TIPO_DOCUMENTO" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" ADD CONSTRAINT "PK_TIPO_DOCUMENTO" PRIMARY KEY ("PK_TIPO_DOCUMENTO")`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP COLUMN "TIPO_DOC"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD "TIPO_DOC" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO" FOREIGN KEY ("TIPO_DOC") REFERENCES "TIPO_DOCUMENTO"("PK_TIPO_DOCUMENTO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "CATEGORIA"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "VER_MATERIAL"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "VER_PLATAFORMA"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ACRONIMO"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ORGANIZACION"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "IDIOMA"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "TIPO"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "FECHA_LANZAMIENTO"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ESTADO_MATERIAL"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "ESTADO"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "INTENSIDAD"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "NOMBRE"`);
        await queryRunner.query(`ALTER TABLE "CURSO" DROP COLUMN "SIGLA"`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "categoria" nvarchar(100)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ver_material" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "ver_plataforma" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "acronimo" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "organizacion" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "idioma" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "tipo" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "fecha_lanzamiento" date`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "estado_material" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "estado" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "intensidad" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "nombre" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CURSO" ADD "sigla" nvarchar(50) NOT NULL`);
        await queryRunner.query(`EXEC sp_rename "plataforma.dbo.GRUPO.FK_CURSO", "fk_curso"`);
    }

}
