import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = (props) => {
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {props.jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => props.currentJob(index)}
              className={`job-btn ${index === props.currentJobIndex && 'active-btn'}`}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <article className="job-info">
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <p className="job-date">{props.dates}</p>
        {props.duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Job;
