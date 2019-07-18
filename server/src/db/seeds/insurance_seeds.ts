import Knex from 'knex'
import MemberPremium from '../../models/member-premium';
import { knexDb } from '../../db';

export function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('member_premium').del()
  .then(function () {
    // Inserts seed entries
    return MemberPremium.query(knexDb).insertGraph([
      {sumInsured: 10000, category1: 36, category2: 47, category3: 52, category4: 57, category5: 64, category6: 74, category7: 90},
      {sumInsured: 15000, category1: 49.05, category2: 64.95, category3: 73.05, category4: 79.95, category5: 90, category6: 106.05, category7: 130.05},
      {sumInsured: 18000, category1: 57.06, category2: 75.42, category3: 85.32, category4: 93.42, category5: 105.84, category6: 125.46, category7: 154.26},
      {sumInsured: 20000, category1: 62, category2: 82, category3: 93, category4: 102, category5: 116, category6: 138, category7: 170},
      {sumInsured: 30000, category1: 93, category2: 123, category3: 139.50, category4: 153, category5: 174, category6: 207, category7: 255},
    ]);
  });
};
