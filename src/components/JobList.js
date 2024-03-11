import React, { useState } from 'react';
import Job from './Job';
import jsonData from '../data/data.json';
import '../css/JobList.css';

export default function JobList() {
    const [filter, setFilter] = useState('');
    const [filteredJobList, setFilteredJobList] = useState(jsonData);

    const handleFilterChange = (e) => {
        const filterText = e.target.value;
        const filteredJobs=[];
        setFilter(filterText);
        console.log(filterText);
        jsonData.forEach(job => {
            if (
                job.position.toLowerCase().includes(filterText.toLowerCase()) ||
                job.company.toLowerCase().includes(filterText.toLowerCase())||
                job.role.toLowerCase().includes(filterText.toLowerCase()) ||
                job.level.toLowerCase().includes(filterText.toLowerCase()) ||
                job.contract.toLowerCase().includes(filterText.toLowerCase()) ||
                job.location.toLowerCase().includes(filterText.toLowerCase()) ||
                
                job.languages.some(language => language.toLowerCase().includes(filterText.toLowerCase())) ||
                job.tools.some(tool => tool.toLowerCase().includes(filterText.toLowerCase()))

            ) {
                filteredJobs.push(job);
                console.log(job.position);
            }
        });
        setFilteredJobList(filteredJobs);
    };

    return (
        <div className="job-list-container">
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Filter by title, companies, languages..."
                    value={filter}
                    onChange={handleFilterChange}
                />
            <div className="jobs-container">
                {filteredJobList.length>0 ? (
                    filteredJobList.map(job => (
                        <Job key={job.id} job={job} />
                    ))
                ) : (
                    <p>Can't find what you are looking for!</p>
                )}
            </div>
        </div>
    );
}
