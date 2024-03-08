import React from 'react';

const Job = ({ job }) => {
  return (
    <div className="job">
      <img src={job.logo} alt={`${job.company} logo`} />
      <div>
        <h2>{job.position}</h2>
        <p>{job.company}</p>
        <p>{job.postedAt} • {job.contract}</p>
        <p>{job.location}</p>
      </div>
    </div>
  );
};

export default Job;
