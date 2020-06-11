import React from 'react'

const JobBoard = ({job, addFilter}) => {
  return (
  <div>
    <div class="d-flex flex-row px-5 pt-3 bd-highlight">
    {/* Image */}
      <div class="p-2 pt-4 bd-highlight"><img src={job.logo} alt={job.company}/></div>
    {/* 
    --  Job info --
    */}
      <div class="p-2 bd-highlight ml-4">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="d-inline p-2 bd-highlight">
            <h3 class="d-inline align-middle">{job.company}</h3>
            <div class="d-inline">
              {job.new && (<button type="button" class="btn btn-success rounded-pill ml-3">New</button>)}
            </div>
            <div class="d-inline">
              {job.featured && (<button type="button" class="btn btn-dark rounded-pill ml-3">Featured</button>)}
            </div>
          </div>
          <div class="p-2 bd-highlight"><h4>{job.position}</h4></div>
          <div class="p-2 bd-highlight"><p>{job.postedAt} * {job.contract} * {job.location}</p></div>
        </div>
      </div>
    {/* 
     -- Skills --
    */}
      <div class="p-2 flex-fill bd-highlight">
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight">
            {job.languages.map((lang) => (
              <button type="button" name={lang} onClick={addFilter} class="btn btn-success ml-3">{lang}</button>
              ))
            }
           </div>
        </div>
      </div>

        
    </div>
  </div>
  )
}

export default JobBoard;
