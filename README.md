# Travel Pal

Travel Pal is a trip planning web application that includes a packing list, itinerary, budget tracker, and
calendar feature. This application is built using HTML/CSS, Bootstrap, JavaScript, React, and public web APIs. 
The purpose of this web application is to help people plan and organize their travels better, sorting travel 
aspects out into different pages and making them accessible and customizable wherever they go.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run

### `npm install`
Installs all the dependencies of the app.
### `npm start`
Runs the app on [http://localhost:3000](http://localhost:3000) in your browser.

## Page Development
Overall resources: 
https://react-bootstrap.github.io/components/ and all documentation for React Bootstrap Components
https://reactjs.org/docs/getting-started.html

### Home
The home page allows users to input any basic information about their trip - the dates they'll be traveling, where they are going, and any additional notes to themselves while preparing. The local storage on this page also allows users to have their trip information saved upon entry (until they clear it). 

Resources used: 
- https://stackoverflow.com/questions/49007357/how-to-make-the-whole-card-component-clickable-in-material-ui-using-react-js (for linking the cards)
- https://l.facebook.com/l.php?u=https%3A%2F%2Ficons8.com%2Fillustrations%3Ffbclid%3DIwAR0ZrgvDANBVFglIEDvqO9fDxGykwbsBk8084Z6jj4JjvhlRkcwwSctE7kw&h=AT0RInnaaQys0_lUEr0LGazvrq6-BL8v9VoXjRxahKUv-3sQenZxCRWg2MVeuuF03-Q5smD_TTK68L62Is-IDlgKsPKYjaJxsR4gipMaZBjFYjHVHP3IFrN10K7Oid4f1L9ElPv1TSQ (for our icons within the cards)
- Development and storage from the itinerary page (which was developed before this one)
### Packing List
The packing list page allows users to enter any items they made need on their trip, and keep track of those items as they pack them. The percentage bar on the page allows them to see how much they have packed and they need to pack, and when they are done they can remove their completed packed items. 

Resources used: 
- https://github.com/prabhath6/to-do-list-react-bootstrap/tree/master/src (helped with foundation of Packing List [explained more in PackingList.js])
- The formatting of other pages (Budget Tracker, etc.) to help centralize and format this page

### Budget Tracker
The budget tracker page allows users to set a budget and log any expenses they make throughout their trip. Users can create a new expense entry by inputting the date, name of expense, category, and the amount they spent. Once they add the entry, it will appear under its respective category. There are six categories that include food, shopping, entertainment, transportation, lodging, and other. Each category section displays the total amount spent for that specific category. Users can also edit and delete expense entries. The top of the budget tracker also displays the total amount of money spent as well as the amount remaining in the budget. 

Resources used:
- https://dev.to/amanhimself/build-a-expense-tracker-app-with-react-hooks-and-localstorage-api-4lfj
- https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8
- https://www.pluralsight.com/guides/prop-changes-in-react-component
- https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
- https://tyindpgood.medium.com/add-delete-item-from-state-array-in-react-hook-9d7f73d66d80

### Itinerary 
The itinerary page allows users to add an event entry that may/will occur on their planned trip. This page is to help those who need to plan out their trips by day and time in order to be most efficient with their use of their time. Users can give their event a name, a start and end date and time, as well as an optional description for any miscellaneous information about that entry (e.g. address information, flight number information, phone numbers, etc). If needed, users can also edit each event entry as well as delete using the respective icons next to each entry.  

Resources used:
- https://www.geeksforgeeks.org/how-to-create-todo-app-using-reactjs/
- https://fullcalendar.io/docs/react
- https://stackoverflow.com/questions/29606643/difference-between-moment-js-functions-and-javascript-date-functions/29606774
- https://momentjs.com/docs/#/use-it/
- https://devhints.io/moment
- https://stackoverflow.com/questions/52586726/javascript-moment-js-how-to-check-if-date-is-previous-date
- https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
- https://jsonworld.com/demo/how-to-use-localStorage-with-reactjs
- https://stackoverflow.com/questions/43668808/render-data-from-localstorage-with-react

### Calendar
The calendar page works in sync with the itinerary page. Here, all entries added to the itinerary will be displayed in calendar form. The user can navigate to different mopnths using the arrow buttons on the top right, and if necessary, they can jump back to today's date by clicking on the "today" button. 

Resources used:
- https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/react/src/DemoApp.jsx
- https://dev.to/lberge17/fullcalendar-with-react-3hnl
- https://fullcalendar.io/docs/event-object

## Bonus Features
 ### Calendar
 Trip calendar that displays itinerary events, implemented using the FullCalendar API. (Considered a bonus feature by the Professor's comment on our Project Plan)

 ### Home Page
 Users can create a new trip and edit its information. Also includes cards with illustrations that navigate to each page.

 ### Packing List Progress Bar
 The packing list page includes a progress bar that allows users to see the percentage of items they have packed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
