import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import {loadSchema, getSchema} from 'graphql-loader'
import cors  from 'cors';

const {typeDefs} = require("./graphql/types");
const {resolvers} = require("./graphql/resolvers");

const app = express();
const schema = getSchema();
const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
app.use(cors())

app.use('/graphiql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true
}));

app.listen(5000);