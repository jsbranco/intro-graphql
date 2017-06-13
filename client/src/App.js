import React, {Component} from 'react';
import Users from './components/Users'
import logo from './logo.svg';
import './App.css';
import {
    ApolloProvider,
} from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
const networkInterface = createNetworkInterface({ uri: 'http://localhost:5000/graphiql' });
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
//
// const typeDefs = `
//       type User {
//         id: Int
//         name: String
//       }
//
//       type Query {
//         user: User
//       }
//     `;
//
// const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema });
//
// const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
//
// const client = new ApolloClient({
//     networkInterface: mockNetworkInterface,
// });
const client = new ApolloClient({
    networkInterface
});
class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h5>Simple example of React + Apollo GraphQL</h5>
                    </div>
                    <div className="App-intro">
                        <Users/>
                    </div>
                    <div className="App-footer"></div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
