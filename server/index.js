import express, { response } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import axios from "axios";


const schema = buildSchema(`

    input UserDetails{
        id: String
        name: String
        email: String
        password: String
        address: String
    }
    input LoginDetails{
        email: String,
        password: String
    }
    type User{
        id: String
        name: String
        email: String
        password: String
        address: String
    }
    type Query {
        checkUser(email: String, password: String): [User]
    }
    type Mutation {
        addUser(input: UserDetails): User,
    }
`);


async function addNewUSer({input}){
    const detail = await axios.get('http://localhost:3000/users?email=' + input.email).then( res =>res.data);
    if(detail != ''){
        throw new Error("Please Choose Unique Email")
    }
    return axios.post('http://localhost:3000/users/', {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password,
        address: input.address
    }).then(res => res.data);
}

function checker(args){
    return axios.get('http://localhost:3000/users?email=' + args.email + '&password=' + args.password).then( res =>res.data
        );
}

const root = {
    addUser: addNewUSer,
    checkUser: checker
};

//Create an express server and GraphQL endpoint
const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

//Listening to our server
app.listen(5000, () => {
console.log("GraphQL server with Express running on localhost:5000/graphql");
});