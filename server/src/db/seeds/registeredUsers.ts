
import Knex from 'knex';
import Premium from '../../models/premium';
import { knexDb } from '../../db';

export function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('premium').del()
    .then(function () {
      // Inserts seed entries
      return Premium.query(knexDb).insertGraph([
        {memberName: "sindiso", memberId: "0000000000000", payerId: "12345", insuredValue: 10000, isMember: true},
        {memberName: "sindi", memberId: "0000000000000", payerId: "54321", insuredValue: 15000, isMember: true}
      ]);
    });
};
