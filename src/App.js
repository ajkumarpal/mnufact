
import Table from './components/Table';
import './App.css';
import { actionToBePerformed, resultWithGamma, resultWithoutGamma, tableHeaderWithGamma, tableHeaderWithoutGamma } from './utility/dataManipulation';

function App() {

  return (
    <>
      <h3>Question 5(a) Solution:- </h3>
      <Table tableHeaders = {tableHeaderWithoutGamma} actionToBePerformed = {actionToBePerformed} results = {resultWithoutGamma}/>

      <br/>
      <h3>Question 5(b) Solution:- </h3>
      <Table tableHeaders = {tableHeaderWithGamma} actionToBePerformed = {actionToBePerformed} results = {resultWithGamma}/>
    </>
  );
}

export default App;
