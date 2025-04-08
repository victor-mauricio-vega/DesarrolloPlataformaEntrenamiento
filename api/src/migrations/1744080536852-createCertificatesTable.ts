import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCertificatesTable1744080536852 implements MigrationInterface {
    name = 'CreateCertificatesTable1744080536852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estudiante" DROP CONSTRAINT "fk_estudiante_usuario"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_0203cadb743c702bf5e38984a3c"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_2a48a1914e03620deb3bd49a26b"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_1b3f04fefb7342565f922116215"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_2ac748ca3f050805dfb36e2c136"`);
        await queryRunner.query(`ALTER TABLE "ubicacion" DROP CONSTRAINT "fk_ubicacion_pais"`);
        await queryRunner.query(`ALTER TABLE "salon" DROP CONSTRAINT "fk_salon_ubicacion"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP CONSTRAINT "fk_instructor_usuario"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP CONSTRAINT "fk_administrador_usuario"`);
        await queryRunner.query(`ALTER TABLE "encuesta" DROP CONSTRAINT "fk_encuesta_grupo"`);
        await queryRunner.query(`ALTER TABLE "encuesta" DROP CONSTRAINT "fk_encuesta_estudiante"`);
        await queryRunner.query(`ALTER TABLE "certificado" DROP CONSTRAINT "fk_certificado_grupo"`);
        await queryRunner.query(`ALTER TABLE "certificado" DROP CONSTRAINT "fk_certificado_estudiante"`);
        await queryRunner.query(`DROP INDEX "ixfx_estudiante_usuario" ON "estudiante"`);
        await queryRunner.query(`DROP INDEX "REL_18655fbe6bd8a59cf0b846fb18" ON "estudiante"`);
        await queryRunner.query(`DROP INDEX "ixfk_instructor_usuario" ON "instructor"`);
        await queryRunner.query(`DROP INDEX "REL_0aecb39cac144ed171d452d647" ON "instructor"`);
        await queryRunner.query(`DROP INDEX "REL_a4613645c60bbef0ced04e9f2b" ON "administrador"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "fk_usuario"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP COLUMN "fk_instructor"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP CONSTRAINT "PK_7f16186e5126afef48e6814946a"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "PK_CURSO"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP CONSTRAINT "UQ_62e726f6e9436f961d7f75573ab"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "SIGLA"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "FECHA_LANZAMIENTO"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "NOMBRE"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "INTENSIDAD"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ESTADO"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ESTADO_MATERIAL"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "TIPO"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "IDIOMA"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ORGANIZACION"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ACRONIMO"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "VER_PLATAFORMA"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "VER_MATERIAL"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "CATEGORIA"`);
        await queryRunner.query(`ALTER TABLE "salon" DROP COLUMN "fk_ubicacion"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "fk_usuario"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP COLUMN "fk_usuario"`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "doc_identidad" nvarchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "nombre" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "apellido" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "correo" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "usuario" nvarchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "num_contacto" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "clase" ADD "estudiantePkEstudiante" int`);
        await queryRunner.query(`ALTER TABLE "clase" ADD "grupoPkGrupo" int`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "pk_curso" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD CONSTRAINT "PK_a352d8ef28e915673520e1ee7ce" PRIMARY KEY ("pk_curso")`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "sigla" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "nombre" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "intensidad" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "estado" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "estado_material" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "fecha_lanzamiento" date`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "tipo" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "idioma" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "organizacion" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "acronimo" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ver_plataforma" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ver_material" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "categoria" nvarchar(100)`);
        await queryRunner.query(`ALTER TABLE "ubicacion" ADD "ubicacionesPkSalon" int`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "doc_identidad" nvarchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "nombre" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "apellido" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "correo" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "usuario" nvarchar(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "num_contacto" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD "nombre" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD "apellido" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD "correo" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD "usuario" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "PK_6d43144ef087bb1f913f107d07e"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "PK_0203cadb743c702bf5e38984a3c" PRIMARY KEY ("pfk_estudiante")`);
        await queryRunner.query(`ALTER TABLE "clase" DROP COLUMN "pfk_grupo"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD "pfk_grupo" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "PK_0203cadb743c702bf5e38984a3c"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "PK_6d43144ef087bb1f913f107d07e" PRIMARY KEY ("pfk_estudiante", "pfk_grupo")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_84b2fe48bc5186f0d2e390fa1d" ON "ubicacion" ("fk_pais") WHERE "fk_pais" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD CONSTRAINT "CK_DOC_IDENTIDAD_ESTUDIANTE" CHECK (DOC_IDENTIDAD='0' OR (ISNUMERIC(DOC_IDENTIDAD)=1 AND LEN(DOC_IDENTIDAD)>=6 AND LEN(DOC_IDENTIDAD)<=12))`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD CONSTRAINT "CK_NUM_CONTACTO_ESTUDIANTE" CHECK (NUM_CONTACTO='0' OR LEN(NUM_CONTACTO)>=7)`);
        await queryRunner.query(`ALTER TABLE "horario" ADD CONSTRAINT "ck_hora_inicio_fin" CHECK (hora_fin>hora_inicio)`);
        await queryRunner.query(`ALTER TABLE "salon" ADD CONSTRAINT "ck_estado_salon" CHECK ("estado"='Deshabilitado' OR "estado"="Habilitado")`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD CONSTRAINT "CHK_ESTADO_ADMINISTRADOR" CHECK (estado='Habilitado' OR estado='Deshabilitado')`);
        await queryRunner.query(`ALTER TABLE "pregunta" ADD CONSTRAINT "ck_estado_pregunta" CHECK (estado='Deshabilitado' OR estado='Habilitado')`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_fc15067925d51acd1c99bc222f4" FOREIGN KEY ("estudiantePkEstudiante") REFERENCES "estudiante"("pk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_578c3ed4b71d16c56f2f430a437" FOREIGN KEY ("grupoPkGrupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "fk_clase_empresa" FOREIGN KEY ("fk_empresa") REFERENCES "empresa"("pk_empresa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ubicacion" ADD CONSTRAINT "fk_salon_ubicacion" FOREIGN KEY ("fk_pais") REFERENCES "ubicacion"("pk_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ubicacion" ADD CONSTRAINT "FK_8207b750a2d525b24dde42e19d9" FOREIGN KEY ("ubicacionesPkSalon") REFERENCES "salon"("pk_salon") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "encuesta" ADD CONSTRAINT "fk_encuesta_clase" FOREIGN KEY ("fk_grupo") REFERENCES "clase"("pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "encuesta" ADD CONSTRAINT "fk_encuesta_clase" FOREIGN KEY ("fk_estudiante") REFERENCES "clase"("pfk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certificado" ADD CONSTRAINT "fk_certificado_clase" FOREIGN KEY ("fk_grupo") REFERENCES "clase"("pfk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certificado" ADD CONSTRAINT "fk_certificado_clase" FOREIGN KEY ("fk_estudiante") REFERENCES "clase"("pfk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "certificado" DROP CONSTRAINT "fk_certificado_clase"`);
        await queryRunner.query(`ALTER TABLE "certificado" DROP CONSTRAINT "fk_certificado_clase"`);
        await queryRunner.query(`ALTER TABLE "encuesta" DROP CONSTRAINT "fk_encuesta_clase"`);
        await queryRunner.query(`ALTER TABLE "encuesta" DROP CONSTRAINT "fk_encuesta_clase"`);
        await queryRunner.query(`ALTER TABLE "ubicacion" DROP CONSTRAINT "FK_8207b750a2d525b24dde42e19d9"`);
        await queryRunner.query(`ALTER TABLE "ubicacion" DROP CONSTRAINT "fk_salon_ubicacion"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "fk_clase_empresa"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_578c3ed4b71d16c56f2f430a437"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "FK_fc15067925d51acd1c99bc222f4"`);
        await queryRunner.query(`ALTER TABLE "pregunta" DROP CONSTRAINT "ck_estado_pregunta"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP CONSTRAINT "CHK_ESTADO_ADMINISTRADOR"`);
        await queryRunner.query(`ALTER TABLE "salon" DROP CONSTRAINT "ck_estado_salon"`);
        await queryRunner.query(`ALTER TABLE "horario" DROP CONSTRAINT "ck_hora_inicio_fin"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP CONSTRAINT "CK_NUM_CONTACTO_ESTUDIANTE"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP CONSTRAINT "CK_DOC_IDENTIDAD_ESTUDIANTE"`);
        await queryRunner.query(`DROP INDEX "REL_84b2fe48bc5186f0d2e390fa1d" ON "ubicacion"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "PK_6d43144ef087bb1f913f107d07e"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "PK_0203cadb743c702bf5e38984a3c" PRIMARY KEY ("pfk_estudiante")`);
        await queryRunner.query(`ALTER TABLE "clase" DROP COLUMN "pfk_grupo"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD "pfk_grupo" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clase" DROP CONSTRAINT "PK_0203cadb743c702bf5e38984a3c"`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "PK_6d43144ef087bb1f913f107d07e" PRIMARY KEY ("pfk_estudiante", "pfk_grupo")`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP COLUMN "usuario"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "administrador" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "num_contacto"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "usuario"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "instructor" DROP COLUMN "doc_identidad"`);
        await queryRunner.query(`ALTER TABLE "ubicacion" DROP COLUMN "ubicacionesPkSalon"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "categoria"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ver_material"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "ver_plataforma"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "acronimo"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "organizacion"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "idioma"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "tipo"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "fecha_lanzamiento"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "estado_material"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "intensidad"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "sigla"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP CONSTRAINT "PK_a352d8ef28e915673520e1ee7ce"`);
        await queryRunner.query(`ALTER TABLE "curso" DROP COLUMN "pk_curso"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP COLUMN "grupoPkGrupo"`);
        await queryRunner.query(`ALTER TABLE "clase" DROP COLUMN "estudiantePkEstudiante"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "num_contacto"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "usuario"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "correo"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "estudiante" DROP COLUMN "doc_identidad"`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD "fk_usuario" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD "fk_usuario" int`);
        await queryRunner.query(`ALTER TABLE "salon" ADD "fk_ubicacion" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "CATEGORIA" nvarchar(100)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "VER_MATERIAL" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "VER_PLATAFORMA" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ACRONIMO" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ORGANIZACION" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "IDIOMA" nvarchar(50)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "TIPO" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ESTADO_MATERIAL" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "ESTADO" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "INTENSIDAD" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "NOMBRE" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "FECHA_LANZAMIENTO" date`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "SIGLA" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "curso" ADD CONSTRAINT "UQ_62e726f6e9436f961d7f75573ab" UNIQUE ("SIGLA")`);
        await queryRunner.query(`ALTER TABLE "curso" ADD "PK_CURSO" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "curso" ADD CONSTRAINT "PK_7f16186e5126afef48e6814946a" PRIMARY KEY ("PK_CURSO")`);
        await queryRunner.query(`ALTER TABLE "clase" ADD "fk_instructor" int`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD "fk_usuario" int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_a4613645c60bbef0ced04e9f2b" ON "administrador" ("fk_usuario") WHERE ([fk_usuario] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_0aecb39cac144ed171d452d647" ON "instructor" ("fk_usuario") WHERE ([fk_usuario] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "ixfk_instructor_usuario" ON "instructor" ("fk_usuario") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_18655fbe6bd8a59cf0b846fb18" ON "estudiante" ("fk_usuario") WHERE ([fk_usuario] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "ixfx_estudiante_usuario" ON "estudiante" ("fk_usuario") `);
        await queryRunner.query(`ALTER TABLE "certificado" ADD CONSTRAINT "fk_certificado_estudiante" FOREIGN KEY ("fk_estudiante") REFERENCES "estudiante"("pk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certificado" ADD CONSTRAINT "fk_certificado_grupo" FOREIGN KEY ("fk_grupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "encuesta" ADD CONSTRAINT "fk_encuesta_estudiante" FOREIGN KEY ("fk_estudiante") REFERENCES "estudiante"("pk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "encuesta" ADD CONSTRAINT "fk_encuesta_grupo" FOREIGN KEY ("fk_grupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "administrador" ADD CONSTRAINT "fk_administrador_usuario" FOREIGN KEY ("fk_usuario") REFERENCES "USUARIO"("pk_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD CONSTRAINT "fk_instructor_usuario" FOREIGN KEY ("fk_usuario") REFERENCES "USUARIO"("pk_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salon" ADD CONSTRAINT "fk_salon_ubicacion" FOREIGN KEY ("fk_ubicacion") REFERENCES "ubicacion"("pk_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ubicacion" ADD CONSTRAINT "fk_ubicacion_pais" FOREIGN KEY ("fk_pais") REFERENCES "PAIS"("pk_pais") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_2ac748ca3f050805dfb36e2c136" FOREIGN KEY ("fk_instructor") REFERENCES "instructor"("pk_instructor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_1b3f04fefb7342565f922116215" FOREIGN KEY ("fk_empresa") REFERENCES "empresa"("pk_empresa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_2a48a1914e03620deb3bd49a26b" FOREIGN KEY ("pfk_grupo") REFERENCES "grupo"("pk_grupo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase" ADD CONSTRAINT "FK_0203cadb743c702bf5e38984a3c" FOREIGN KEY ("pfk_estudiante") REFERENCES "estudiante"("pk_estudiante") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estudiante" ADD CONSTRAINT "fk_estudiante_usuario" FOREIGN KEY ("fk_usuario") REFERENCES "USUARIO"("pk_usuario") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
