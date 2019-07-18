import { Model } from 'objection';

export default class Premium extends Model {
  public memberName!: string;
  public memberId!: string;
  public payerId!: string;
  public insuredValue!: number;
  public isMember?: boolean;

  static get tableName() {
    return 'premium';
  }
}
