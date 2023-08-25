import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1693003465303 implements MigrationInterface {
  private readonly logger = new Logger($npmConfigName1693003465303.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    queryRunner.query('UPDATE item SET public = 1)');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}