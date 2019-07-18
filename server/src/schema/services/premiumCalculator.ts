import moment from 'moment'
import NotMemberPremium from '../../models/not-member-premium';
import { knexDb } from '../../db';
import MemberPremium from '../../models/member-premium';
import Premium from '../../models/premium';

const getAgeCategory = (age: number): string => {
  if (age >= 18 && age <= 40)
    return 'category1';
  else if (age >= 26 && age <= 40)
    return 'category2';
  else if (age >= 41 && age <= 45)
    return 'category3';
  else if (age >= 46 && age <= 50)
    return 'category4';
  else if (age >= 51 && age <= 55)
    return 'category5';
  else if (age >= 56 && age <= 60)
    return 'category6';
  else if (age >=61 && age <= 65)
    return 'category7';
  else
    return ''
}

const getDateOfBirth = (idNumber: string): number => {
  const dateOfBirth = moment('19' + idNumber.substring(0, 6)).format('YYYY-MM-DD');
  const age = moment().diff(dateOfBirth, 'year')
  return age;
}

const getPremium = async (category: string, insuredValue: number, payerId?: string) => {
  if (payerId) {
    const user = await Premium.query(knexDb).select('payer_id').where('payer_id', payerId).andWhere('is_member', true);
    if (user.length >= 1)
      return await MemberPremium.query(knexDb).select(category).where('sum_insured', insuredValue);
    else
      return []
  } else {
    return await NotMemberPremium.query(knexDb).select(category).where('sum_insured', insuredValue);
  }
}

export const premiumCalculator = async(memberId: string, insuredValue: number, payerId?: string) => {
  const age = getDateOfBirth(memberId);
  const category = getAgeCategory(age);
  const value = await getPremium(category, insuredValue, payerId);
  const policyFee = value.length >= 1 ? 10 : 0;
  let premium = 0;
  let total = 0;
  if (value.length >= 1) {
    // @ts-ignore
    premium = value[0][category];
    total = premium + policyFee;
  }
  
  return {
    policyFee,
    premium,
    total
  }
}

export const getHistory = async (memberId: string) => {
  const data = await Premium.query(knexDb).select('*').where('member_id', memberId)
  const index = data.length - 2;
  console.log(data[index].memberId)
  const age = getDateOfBirth(data[index].memberId);
  const category = getAgeCategory(age);
  const value = await getPremium(category, data[index].insuredValue, data[index].payerId);
  const policyFee = value.length >= 1 ? 10 : 0;
  let premium = 0;
  let total = 0;
  if (value.length >= 1) {
    // @ts-ignore
    premium = value[0][category];
    total = premium + policyFee;
  }
  
  return {
    policyFee,
    premium,
    total
  }
}