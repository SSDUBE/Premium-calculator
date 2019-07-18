import { GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLObjectType } from "graphql";
import { premiumCalculator } from '../services/premiumCalculator';
import Premium from "../../models/premium";
import { knexDb } from "../../db";
import PremiumResults from '../models/PremiumResults.graphql';

const CreateUserPremium = new GraphQLObjectType({
  name: 'CreateUserPremium',
  fields: {
    addUser: {
      type: PremiumResults,
      args: {
        memberName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        memberId: {
          type: new GraphQLNonNull(GraphQLString)
        },
        payerId: {
          type: GraphQLString
        },
        insuredValue: {
          type: new GraphQLNonNull(GraphQLFloat)
        }
      },
      resolve: async(_parentValue, args) => {
        const { memberName, memberId, payerId, insuredValue } = args
        const results = await premiumCalculator(memberId, insuredValue, payerId);
        return Premium.query(knexDb).insertGraph({
          memberName,
          memberId,
          payerId,
          insuredValue},
        ).then(res => {
          if (res) {
            return results
          }
        })
      }
    }
  }
})

export default CreateUserPremium