React Pokedex by Ethan Vander Wiel

This project was created as a practice of React fundamentals, as well as how to access and use APIs within an application. The project uses the PokeAPI for the data (https://pokeapi.co/). 

I wanted to make a program that uses the idea of "Cards" within React. In this project, each Pokemon has a card to it's own. Within each
card there is information including the Name, Typing, a Picture of what they look like, and their ability. However, using the PokeAPI,
it is very easy to gather any information that I would need in the future.

The main part of this project is to have the site create the cards as it gathers the data. This means that the correct number of cards
will be generated for any number of Pokemon (or any data) gathered from the API. This really highlights the power of ReactJS as I only have to create one component for every card, then map the data gathered from the API to a new card. 


REACT COMPONENTS:
There are three React components within the project. 
The first is App. This is a simple component that runs over the whole page. 
It is called from index.js when the page is loaded. This creates and contains the Pokedex component, 
as well as formatting for the header and other page details.

The next component is Pokedex. This is the list of pokemon and is one of the places where the data from the pokemon is fetched.
Within this component, the data that can be gathered is just the Name of each pokemon and the URL that links to the rest
of that Pokemon's data. Both of these data points will be passed into the Card component.

The last and most important component is the Card component. Within this component, individual data is fetched using the URL that has 
been passed into the card. After this, it connects data points to component state variables, and formats the data within the card. 

All data is fetched using the fetch function and then analyzing the file using JSON. 

The fetching and loading was something I had to learn using online tutorials. 


<h2>Future Features</h2>
Something I want to add in the future is the ability to click each card to show more information, either by a page direct or a 
card flip. I was able to easily make the cards show more information after hovering them, but I wanted it to only be 
onclick so I took this feature out.

I also need to test on other browsers and devices. 




<h2>Autogenerated information on React</h2>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
