# GraphQL Tutorial using React and ApolloClient

## 1. We create a new React project locally with Create React App

## 2. Install Core Dependencies of ApolloClient

npm install @apollo/client graphql

## 3. We initialize ApolloClient

In index.js, let's first import the symbols we need from @apollo/client:
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

Next we'll initialize ApolloClient, passing its constructor a configuration object with the uri and cache fields:

```js
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});
```

* uri: specifies the URL of our GraphQL server, in this case we are
  using ["The Rick and Morty API"](https://rickandmortyapi.com/).
* cache: is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.

## 4. We connect the client to React

We connect Apollo Client to React with the ApolloProvider component.
In index.js, let's wrap our React app with an ApolloProvider.

```html

<ApolloProvider client={client}>
    <App/>
</ApolloProvider>,
```

## 5. We get the data with useQuery

In our App.js file, replace the content of our existing file with the code snippet below:

```html
import { useQuery, gql } from '@apollo/client';

export default function App() {
return (
<div>
    <h2>My first Apollo app 🚀</h2>
</div>
);
}
```

We can define the query we want to execute by wrapping it in the gql template literal:

```js
const GET_CHARACTERS = gql`
query GetCharacter {
characters{
results{
id
name
image
}
}
}
`;
```

Next, let's define a component named DisplayCharacters that executes our GET_CHARACTERS query with the useQuery hook:

```js
function DisplayCharacters() {
    const {loading, error, data} = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.characters.results.map((character) => (
        <div key={character.id}>
            <p>{character.name}</p>
            <img alt={character.name} src={character.image}/>
        </div>
    ));
}
```

Finally, we'll add DisplayCharacters to our existing component tree:

```html
export default function App() {
return (
<div>
    <h2>My first Apollo app 🚀</h2>
    <br/>
    <DisplayCharacters/>
</div>
);
}
```

When your app reloads, you should briefly see a loading indicator, followed by a list of character names and their
corresponding image.

![Captura de pantalla 2023-02-02 - 13.10.26.png](..%2F..%2FDescargas%2FCaptura%20de%20pantalla%202023-02-02%20-%2013.10.26.png)

Congrats, you just made your first component that renders with GraphQL data from Apollo Client! 🎉

The information for this guide was taken from the following sources:

* [Get started with Apollo Client](https://www.apollographql.com/docs/react/get-started)
* [https://www.apollographql.com/docs/react/get-started](https://www.youtube.com/watch?v=5BwmvekYCpY)
* [The Rick and Morty API](https://rickandmortyapi.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
