import React from 'react';
import Job from './Job';
import jobs from '../data/data.json';

const JobList = () => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
