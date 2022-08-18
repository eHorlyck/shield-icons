import 'bootstrap/dist/css/bootstrap.css';
import GA4React from "ga-4-react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const ga4react = new GA4React(process.env.REACT_APP_MEASUREMENT_ID);


(async () => {
  await ga4react.initialize()
  // .then(res => console.log("Analytics Success."))
  // .catch(err => console.log("Analytics Failure."))
  // .finally(() => {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  // });
})()