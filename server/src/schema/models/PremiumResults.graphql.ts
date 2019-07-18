import { GraphQLNonNull, GraphQLFloat, GraphQLObjectType } from "graphql";

const PremiumResults = new GraphQLObjectType({
  name: 'PremiumResults',
  fields: () => ({
    policyFee: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    premium:{
      type: new GraphQLNonNull(GraphQLFloat)
    } ,
    total: {
      type: new GraphQLNonNull(GraphQLFloat)
    }
  })
});

export default PremiumResults;