import React from 'react';
import Job from './Job';
import jsonData from '../data/data.json';
import '../css/JobList.css';
export default function JobList() {
  const jobList = jsonData;

  return (
      <div className="job-list">
        {jobList.map(job => (
            <Job key={job.id} job={job} />
        ))}
      </div>
  );
};
