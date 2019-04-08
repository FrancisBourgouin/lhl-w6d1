Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

# Intro to ReactJS

## Intro to frameworks

### Ajax Opens Up Possibilities

- Early 2000s, a small new API emerges: XMLHTTPRequest
- Makes it possible for browser and server to exchange information without the needs of the standard hypertext link
- Ajax takes off around 2005
- People realized they can use Ajax to create full-fledges user interfaces
- JavaScript is gaining steam as the language for developing applications
- Opens the door to JavaScript Library
- Most popular one is jQuery (2006)

### What is a Single Page App

[SPA vs MPA](./spa_model.png)(1)

- Web apps that load a single HTML page and dynamically update that page as the user interacts with the app.

- Background JavaScript performs any server interactions and modifies the view as needed.

- In an SPA, after the first page loads, all interaction with the server happens through AJAX calls. These AJAX calls return data usually in JSON format.

- In a traditional Web app, every time the app calls the server, the server renders a new HTML page. This triggers a page refresh in the browser.
  (ex.: ejs in ExpressJS)

#### Why SPAs

- App-like user interface and interactions
- More responsive UI

#### Benefits of SPAs

- Better Overall Performance

  - The HTML page is sent and loaded only once
  - Only the data is exchanged
  - Requires less time and bandwith than constantly sending HTML

- Better User-Experience

  - Modern Web app has a lot of user interactions
  - Web apps that need to constantly reloading pages from the server every time the user interacts with the page do not provide a great user experience
  - No page re-loads mean a better user experience

- Clear separation or the client and backend layers.
  - You can change the backend (without changing the API)
  - Inversely, the API can work with any client
  - Easier to update the front-end or back-end

#### Challenges of SPAs

- App Navigation is controlled client-side
  - SPA uses the URL to get the desired content
  - SPA needs to implement client-side routing
- A lot of DOM manipulations
  - In a SPA, the HTML code needs to be rendered dynamically in the browser
  - Manipulating the DOM to update the view is slow

[DOM workflow](./dom.png)

### What is a framework?

- A set of devlopment tools and with opinions expressed according the the framework pattern
- Framework help you build an app of a specific domain

#### Caracteristics

- You must conform to the paradigm of the framework
- Makes your life easier by simplifying complex problems
- Help you build things faster
- Gives you a lot of built-in functionalities such as routing, libraries, templating, session management, etc
- Provides abstractions
- Write more consistent code with less bugs

### MVC Pattern

[MVC Pattern](./mvc.png)
[MVVM Pattern](./mvvm.png)

MVVM

Wire the data model to the view. When the model changes the view is updated and vice versa - 2 way data binding

- models are observable objects and change the view accordingly. Lot of mutations.

  - data bindings -> every part of the apps changes according to model changes
  - As the app grows, it becomes difficult to figure out the effects of the change in one place and how it impacts the rest of the app.

## ReactJS

Demo of Chatty

### Opinions of ReactJS

- Declarative
- Composition
- Unidrectional Dataflow
- Explicit Mutations
- JavaScript-Firs Paradigm

#### Composition of Components

- Components are the building blocks of react
- Components are reusable api that encapsulates a lot of different stuff
- Take a functionality of a small piece of your application and encapsulated its own isolated container
- A component encapsulate or hide the underlying complexity of what's going on u(state, events, etc)
- markup with css + behaviors(javascript)
- hide the implementation details from the client
- high-level components that are consisting or lower-lever components like divs and spans

- Composition of components is to break down the UI into specific components
- You build a large app out of mltiple small apps
- Similar to breaking down your code into several functions
- Composition -> A component that uses other components
- Compose components together in order to build a more complex UI

#### React is Declarative

- Imperative vs Declarative

a) Imperative code (How)

- You describe all the steps the computer needs to do in order to accomplish a task

```
const map = (elements, changeFct) => {
  const list = [];
  for (let i = 0; i < elements.length; i++) {
    list.push(changeFct(elements[i]));
  }
  return list;
}
```

b) Declarative code (What)

- You focus on the output of the task
- There is a level of abstraction about how it's done

```
const doubles = [1,2,3,4].map(number => number * 2)
```

- Benefits of Declarative Code
  - Reduce Side Effects
  - Minimize Mutability
  - More Readable Code
  - Less Bugs

#### Unidirectional Data Flow

- state > UI

- React uses a unidirectional data flow

  - Data flow is one way
  - Data goes from parent element down to children elements

#### Explicit Mutations

- No explicit data bindings
- The state is changing whenever we call setState
- setState triggers a re-render of the View

##### Render function

- React Render function
  - Describe what the component will look like at any point in time
  - Return a representation of the view
  - Rakes this representation and create a string of markups and inject that strings into the document
  - Two pass rendering
    1. Generate Markup
    2. Attach Events
  - Updates
    - Keep the UI up to date. Automatically update the view as the data changes
    - Compare view representations of current render and update render and compute the minimum set of DOM mutations possible

##### Virtual DOM

- Manipulating the DOM is slow and inefficient

[Browser Workflow](./dom.png)(8)

- Everytime the DOM changes, the rendertree needs to recalculate all the properties of all the elements
- With lots of DOM manipulation involved in SPAs, this process is really inefficient

- React minimizes the amount of mutations by using a Virtual DOM
- The Virtual DOM is an abstraction of the real DOM (a virtual copy in memory)

1. The updated virtual DOM gets compared to what its previous state
2. React figures out which objects have changed
3. Only those objects get updated on the real DOM
4. Changes on the real DOM cause the screen to change

#### Just JavaScript

- React is a JavaScript-first Paradigm
  - JavaScript is flexible
  - JavaScript is a language you already known
  - React doesn't recreate the functionality that you already know in JavaScript
  - - No need to use API specific to a framework

### React Create Element

`React.createElement( /* element */, /* props */, /* children */ );`

- You're creating object that represents DOM nodes, not actual HTML element
- It's not creating a real DOM element until render is called
- ReactDOM is the layer responsible to render React elements into the DOM
- ReactDOM is completely decoupled from React

```
import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement("h1", {className: 'title'}, 'Hello World');

ReactDOM.render(reactElement, document.getElementById('react-root'));
```

- React.createElement is harder to read and maintain
- Writing all components this way becomes cumbersome
- Solution -> JSX Syntax, an HTML-like syntax to write components

```
import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = <h1 className='title'>Hello World</h1>;

ReactDOM.render(reactElement, document.getElementById('react-root'));
```

**Some rules about JSX**

- Every tag must be closing even none closing tags in HTML such as \<img\> and \<input\>...\<img src=""\> becomes \<img src="" /\>
- Components must return one root tag. If you have multiple elements, you must wrap them in a span, div, or React.Fragment
- JavaScript expressions need to be wrapped inside {}
- Regular HTML comments do not work is JSX. To insert comments in JSX you must use this syntax: {/\* Insert Comment Here \*/}
- class becomes _className_

### React Development Tools

- React
- React Router
  - Assign routes to components
- Webpack
  - Code Bundler
- Babel
  - Transpiler
- Axios (or Fetch)
  - Async requests

### React Ecosystem

- React Native
- Material UI
- Next.js
- MobX / Redux
- Storybook
- React Desktop
- React VR

## References

1.[ASP.NET - Single-Page Applications: Build Modern, Responsive Web Apps with ASP.NET](https://msdn.microsoft.com/en-us/magazine/dn463786.aspx)

2.[Introduction To Single Page Application](https://www.slideshare.net/kmstechnology/introduction-to-single-page-application)

3.[Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)

4.[Angular Single Page Applications (SPA): What are the Benefits?](https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/)

5.[Evolution of the Single Page Application](http://paislee.io/evolution-of-the-single-page-application/)

6.[Introduction to React.js](https://www.youtube.com/watch?v=XxVg_s8xAms)

7.[React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)

8.[The one thing that no one properly explains about React — Why Virtual DOM](https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq)
