import Knex from 'knex'
import { knexDb } from '../../db';
import NotMemberPremium from '../../models/not-member-premium';

export function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('not_member_premium').del()
  .then(function () {
    // Inserts seed entries
    return NotMemberPremium.query(knexDb).insertGraph([
      {sumInsured: 5000, category1: 30, category2: 38, category3: 42, category4: 46, category5: 51, category6: 61, category7: 74},
      {sumInsured: 12000, category1: 36, category2: 48, category3: 54, category4: 58.95, category5: 67.95, category6: 82.05, category7: 103.05},
      {sumInsured: 18000, category1: 39.96, category2: 54.36, category3: 61.56, category4: 67.68, category5: 78.48, category6: 95.58, category7: 120.24},
      {sumInsured: 22000, category1: 42, category2: 58, category3: 66, category4: 73, category5: 85, category6: 104, category7: 131},
      {sumInsured: 25000, category1: 63, category2: 87, category3: 99, category4: 109.50, category5: 127.50, category6: 156, category7: 196.50},
    ]);
  });
};
