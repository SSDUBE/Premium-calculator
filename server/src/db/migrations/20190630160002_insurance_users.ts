import knex, {TableBuilder} from 'knex';

export async function up(knex: knex) {
  await knex.schema.createTable('premium', (table: TableBuilder) => {
    table
      .increments()
      .unsigned()
      .primary();
    table
      .string('member_name', 128)
      .notNullable();
    table
      .string('member_id', 13)
      .notNullable();
    table
      .string('payer_id', 5);
    table
      .integer('insured_value')
      .notNullable();
    table
      .boolean('is_member')
      .defaultTo(false);
  });

  await knex.schema.createTable('member_premium', (table: TableBuilder) => {
    table
      .increments()
      .unsigned()
      .primary();
    table
      .float('sum_insured').notNullable();
    table
      .float('category1').notNullable();
    table
      .float('category2').notNullable();
    table
      .float('category3').notNullable();
    table
      .float('category4').notNullable();
    table
      .float('category5').notNullable();
    table
      .float('category6').notNullable();
    table
      .float('category7').notNullable();
  });

  await knex.schema.createTable('not_member_premium', (table: TableBuilder) => {
    table
      .increments()
      .unsigned()
      .primary();
    table
      .float('sum_insured').notNullable();
    table
      .float('category1').notNullable();
    table
      .float('category2').notNullable();
    table
      .float('category3').notNullable();
    table
      .float('category4').notNullable();
    table
      .float('category5').notNullable();
    table
      .float('category6').notNullable();
    table
      .float('category7').notNullable();
  });
};

export async function down(knex: knex) {
  await knex.raw(`DROP TABLE IF EXISTS premium`);
  await knex.raw(`DROP TABLE IF EXISTS member_premium`);
  await knex.raw(`DROP TABLE IF EXISTS not_member_premium`);
};
