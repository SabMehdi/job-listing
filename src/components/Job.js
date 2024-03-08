import React from 'react';

export default function Job  ({ job }) {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return (
    <div className="job">
      <img className="job-logo"  src={job.logo} alt={`${job.company} logo`} />
      <div className="job-info">
        <h2>{job.position}</h2>
        <p>{job.company}</p>
        <p className="job-details">{job.postedAt} • {job.contract} • {job.location}</p>
      </div>
        <div className="job-tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    </div>
  );
};
