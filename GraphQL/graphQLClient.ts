import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.PROD_XMCLOUD_ENDPOINT as string;
  
const graphQLClient = new GraphQLClient(endpoint);
graphQLClient.setHeader('X-GQL-Token', process.env.PROD_XMCLOUD_API_KEY as string);

export default graphQLClient;