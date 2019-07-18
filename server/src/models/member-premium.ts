import { Model } from 'objection';

export default class MemberPremium extends Model {
  public sumInsured!: number;
  public category1!: number;
  public category2!: number;
  public category3!: number;
  public category4!: number;
  public category5!: number;
  public category6!: number;
  public category7!: number;

  static get tableName() {
    return 'member_premium';
  }
}
