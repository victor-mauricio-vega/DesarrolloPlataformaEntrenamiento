import { MigrationInterface, QueryRunner } from "typeorm";

export class TablasPaisTipoDocumentoUsuarioEstudianteGrupoClase1745013177936 implements MigrationInterface {
    name = 'TablasPaisTipoDocumentoUsuarioEstudianteGrupoClase1745013177936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "USUARIO" ("PK_USUARIO" int NOT NULL IDENTITY(1,1), "USUARIO" nvarchar(60) NOT NULL, "CORREO" nvarchar(100) NOT NULL, "NOMBRE" nvarchar(50) NOT NULL, "APELLIDO" nvarchar(50) NOT NULL, "DOCUMENTO_IDENTIDAD" nvarchar(255) NOT NULL, "NUM_CONTACTO" nvarchar(50) NOT NULL, "TIPO_DOC" nvarchar(255) NOT NULL, "FK_PAIS" int NOT NULL, CONSTRAINT "PK_USUARIO" PRIMARY KEY ("PK_USUARIO"))`);
        await queryRunner.query(`CREATE TABLE "PAIS" ("PK_PAIS" int NOT NULL IDENTITY(1,1), "NOMBRE" nvarchar(50) NOT NULL, CONSTRAINT "PK_PAIS" PRIMARY KEY ("PK_PAIS"))`);
        await queryRunner.query(`CREATE TABLE "TIPO_DOCUMENTO" ("PK_TIPO_DOCUMENTO" nvarchar(255) NOT NULL, "EXPRESION" nvarchar(255) NOT NULL, "NOMBRE" nvarchar(255) NOT NULL, "FK_PAIS" int NOT NULL, CONSTRAINT "PK_TIPO_DOCUMENTO" PRIMARY KEY ("PK_TIPO_DOCUMENTO"))`);
        await queryRunner.query(`CREATE TABLE "GRUPO" ("PK_GRUPO" int NOT NULL IDENTITY(1,1), CONSTRAINT "PK_GRUPO" PRIMARY KEY ("PK_GRUPO"))`);
        await queryRunner.query(`CREATE TABLE "CLASE" ("pfk_estudiante" int NOT NULL, "pfk_grupo" int NOT NULL IDENTITY(1,1), CONSTRAINT "pk_clase" PRIMARY KEY ("pfk_estudiante", "pfk_grupo"))`);
        await queryRunner.query(`CREATE TABLE "ESTUDIANTE" ("PK_ESTUDIANTE" int NOT NULL IDENTITY(1,1), "REGISTRADO" bit NOT NULL CONSTRAINT "DF_ESTUDIANTE_REGISTRADO" DEFAULT 1, "FK_USUARIO" int, CONSTRAINT "PK_ESTUDIANTE" PRIMARY KEY ("PK_ESTUDIANTE"))`);
        await queryRunner.query(`CREATE INDEX "IXFK_ESTUDIANTE_USUARIO" ON "ESTUDIANTE" ("FK_USUARIO") `);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO" FOREIGN KEY ("TIPO_DOC") REFERENCES "TIPO_DOCUMENTO"("PK_TIPO_DOCUMENTO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "USUARIO" ADD CONSTRAINT "FK_USUARIO_PAIS" FOREIGN KEY ("FK_PAIS") REFERENCES "PAIS"("PK_PAIS") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" ADD CONSTRAINT "FK_TIPO_DOCUMENTO_PAIS" FOREIGN KEY ("FK_PAIS") REFERENCES "PAIS"("PK_PAIS") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "fk_clase_estudiante" FOREIGN KEY ("pfk_estudiante") REFERENCES "ESTUDIANTE"("PK_ESTUDIANTE") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CLASE" ADD CONSTRAINT "FK_CLASE_GRUPO" FOREIGN KEY ("pfk_grupo") REFERENCES "GRUPO"("PK_GRUPO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ESTUDIANTE" ADD CONSTRAINT "FK_ESTUDIANTE_USUARIO" FOREIGN KEY ("FK_USUARIO") REFERENCES "USUARIO"("PK_USUARIO") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ESTUDIANTE" DROP CONSTRAINT "FK_ESTUDIANTE_USUARIO"`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "FK_CLASE_GRUPO"`);
        await queryRunner.query(`ALTER TABLE "CLASE" DROP CONSTRAINT "fk_clase_estudiante"`);
        await queryRunner.query(`ALTER TABLE "TIPO_DOCUMENTO" DROP CONSTRAINT "FK_TIPO_DOCUMENTO_PAIS"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP CONSTRAINT "FK_USUARIO_PAIS"`);
        await queryRunner.query(`ALTER TABLE "USUARIO" DROP CONSTRAINT "FK_USUARIO_TIPO_DOCUMENTO"`);
        await queryRunner.query(`DROP INDEX "IXFK_ESTUDIANTE_USUARIO" ON "ESTUDIANTE"`);
        await queryRunner.query(`DROP TABLE "ESTUDIANTE"`);
        await queryRunner.query(`DROP TABLE "CLASE"`);
        await queryRunner.query(`DROP TABLE "GRUPO"`);
        await queryRunner.query(`DROP TABLE "TIPO_DOCUMENTO"`);
        await queryRunner.query(`DROP TABLE "PAIS"`);
        await queryRunner.query(`DROP TABLE "USUARIO"`);
    }

}
