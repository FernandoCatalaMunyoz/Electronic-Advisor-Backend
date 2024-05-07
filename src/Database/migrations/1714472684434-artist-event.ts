import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ArtistEvent1714472684434 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "artist-event",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "artist_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "event_id",
            type: "int",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["artist_id"],
            referencedTableName: "artists",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["event_id"],
            referencedTableName: "events",
            referencedColumnNames: ["id"],
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("artist-event");
  }
}
