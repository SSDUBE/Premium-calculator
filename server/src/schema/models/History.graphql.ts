import  {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

import PremiumResults from './PremiumResults.graphql'
import { getHistory } from '../services/premiumCalculator'

const History = new GraphQLObjectType({
  name: 'History',
  fields: {
    history: {
      type: new GraphQLNonNull(PremiumResults),
      args: {
        memberId: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: async (_parentValue, args) => {
        const result = await getHistory(args.memberId);
        return result
      }
    },
  }
});

export default History;