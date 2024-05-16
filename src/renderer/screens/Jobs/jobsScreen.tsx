import React, {useState} from 'react'
import { Layout } from './components';

function JobsScreen() {

  const [jobsList, setJobsList] = useState([{}]);

  function loadData(){
    console.log("Loading data...");
  }

  return (
      <>
      <Layout />
      </>
  )
}

export default JobsScreen