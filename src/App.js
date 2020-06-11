import React, {useState, useEffect} from 'react';
import JobBoard from './components/JobBoard'
import './App.css';
import './style.css';
import data from './data/data.json'


function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterlist, setFilterlist] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, [])
  
const addFilter = (e) => {
 
    // check if array is empty
    if(filter.length === 0){
      let tempSkills = [...jobs];
      tempSkills = tempSkills.filter(skill => skill.languages.includes(e.target.name));
      setFilterlist(tempSkills)
      setFilter([e.target.name])
    }
    else {
      //check if filter is already in array
      if(filter.includes(e.target.name) === false)
      {
        let tempSkills = filterlist.filter(skill => skill.languages.includes(e.target.name));
        setFilterlist(tempSkills)
        setFilter([...filter, e.target.name])
      }
      else {
       window.alert("Filter is already added")
      }
    }

  
      
}

const removeFilter = (e) => {
  let tempSkills = [...jobs]
  var removedItem = filter.indexOf(e.target.name)
  filter.splice(removedItem, 1);
  var filteredSkills = filter.flatMap(item => tempSkills.filter(skill => skill.languages.includes(item)));
  console.log(filterlist);
  setFilterlist(filteredSkills);
  
}
let jobsarray = []
filterlist.length === 0 ? (jobsarray = [...jobs]) : (jobsarray = [...filterlist])

  return (
    <div className="container-md  bg-main">
      <h1 className="font-weight-bolder text-center p-5">Job Board</h1>
        <div className="text-center">
        {
        /* ---- Show filters if exists ------- */ 
        filter.length !== 0 && filter.map(item => (
            <span class="badge badge-dark ml-3 p-0">
              <h3>{item}
                <button type="button" className="but-remove" onClick={removeFilter} name={item}>X</button>           
              </h3>
            </span>
              ))
        }
        </div>
        
      {
      /* ---- Show filtered jobs ------- */         
          jobsarray === 0 ? 
          (
            <p>Jobs are Loading...</p>
          ) : 
          (
            <div class="d-flex flex-column bd-highlight mb-3">
              {jobsarray.map(job => (
                <div class="p-2 bd-highlight bg-light m-2">
                  <JobBoard job={job} key={job.id} addFilter={addFilter}/>
                </div>
                ))
              }
            </div>
          )         
      }
      
    </div>
  );
}

export default App;
