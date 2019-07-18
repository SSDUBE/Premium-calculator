import {GraphQLObjectType, GraphQLSchema} from 'graphql';

// import RootQuery from './models/root-query.graphql';
import CreateUserPremium from './mutations/premium.mutation';
import History from '../schema/models/History.graphql'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    User: {
      type: History,
      resolve: () => ({}),
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: {
      type: CreateUserPremium,
      resolve: () => ({}),
    },
  }),
});

export default new GraphQLSchema({
  query,
  mutation
});
