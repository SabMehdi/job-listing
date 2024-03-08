import React from 'react';
import '../css/Job.css'

export default function Job({ job }) {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return (
        <div className="job">
            <img className="job-logo" src={job.logo} alt={`${job.company} logo`} />
            <div className="job-info">
                <div className="job-title">
                    <span className="company-name">{job.company}</span>
                    {job.new && <span className="new-tag">New!</span>}
                    {job.featured && <span className="featured-tag">Featured</span>}
                </div>
                <h2>{job.position}</h2>
                <p className="job-details">{job.postedAt} &middot; {job.contract} &middot; {job.location}</p>
            </div>
            <div className="job-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );

};