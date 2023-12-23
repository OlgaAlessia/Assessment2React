### Conceptual Exercise

Answer the following questions below:

- **What is the purpose of the React Router?**  
React Router gives the ability for our website to appear to work like a traditional website with multiple pages and URL addresses, but it is actually a single page application. It provides functionality for the URL bar, bookmarks, and back/forward buttons.

- **What is a single page application?**  
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs when different content is to be shown.

This is an app that serves all the HTML that the client sees from one static HTML page that is manipulated by the JS. This usually means that any routing in the app will be done on the client side and no actual server requests will be made to generate the page when changing routes.

- **What are some differences between client side and server side routing?**  
Server-side routing is the traditional approach to handling routes in web applications. The process involves requesting a new page from the server and providing it to the user every time a link is clicked. One major issue with server-side routing is that every request results in a full page refresh, which is not performance efficient in most cases.  
Unlike server-side routing, client-side routing involves JavaScript handling the routing process internally. In client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the URL changes.

With server-side routing, HTML is rendered by the server upon each HTTP request from the client. With client side routing, all routing and HTML rendering in the application is handled by the JavaScript on the client side and requests to the server tend to only return JSON instead of HTML.

- **What are two ways of handling redirects with React Router? When would you use each?**   
With React Router, there is a `Redirect` component that simply re-routes the user to a chosen route and can be used in the `Route` components or in the return statement of another component. This is mostly useful when a user attempts to go to a route that is protected or does not exist. There is also a history object that we have access to with the `useHistory` hook in ReactRouter that will send the user to this new route and add it to the browser history ( -`history.push("/redirect-route")` -). This is more usefull as a final action inside of a callback function ( -i.e. when a form is submitted so the user can be redirected if the submit is successful -).

- **What are two different ways to handle page-not-found user experiences using React Router?**
	- One way is using `Switch` to wrap all your routes and adding a `NotFound` component in a route listed last. `Switch` will search for the first route that matches the user inputed URL, so if none are found, the `NotFound` component will be rendered ( -so long as the `Route` component wrapping the `NotFound` component does not have an `exact` keyword or any specification of a route -).
	- Another way would be to simply us a `Redirect` component when the user reaches a wrong path that sends the user somewhere else ( -whether that be the 404 page or another desired route -).
	

- **How do you grab URL parameters from within a component using React Router?**  
You have to use the `useParams()` hook which grabs all the URL params in an object of key value pairs.

- **What is context in React? When would you use it?**  
Context in React gives us the ability to pass props down to any nested component by defining them in a singular ancestral component and wrapping the first nested component(s) with a `.Provider` property on the context object created from `useContext()`. This is very useful when certain props need to be used by a multitude of components that may not be sibling components or are nested beyond the child component of the parent component that defines the props.

- **Describe some differences between class-based components and function components in React.**
	- class-based components require more setup than their function counterparts because of their need to establish props and state in a constructor method (or as instance properties). Because class components utilize OOP, there is also a lot of work with `this`, meaning instance methods will need this binding to maintain the proper context. 
 	- Another major difference is the methods used to manage the component life cycle. Class-based components have a lot of different methods to manage each part of the component life cycle (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, `render`, etc.) while function components handled most of this with a few simple hooks (namely `useEffect` which can manage mounting, updating and unmounting components in one function).
 	
 .

- **What are some of the problems that hooks were designed to solve?**
	- Hooks initially solved a major problem with function Components which was that they had no way of managing state and were simply used for presentational purposes.
	- Another big problem hooks helped solve was the duplication of code within a component where a lot of similar logic was happening throughout the lifecycle of a component that had to be repeated in each different lifecycle function. Now, the hooks allow you to hook into the state in a way that allows you to manipulate state throughout the lifecycle from one central hook.
	- Similarly, hooks allow for cross component usage so that logic can be stored in a single hook and used throughout the app.