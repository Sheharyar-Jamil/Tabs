import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading";
import Job from "./components/Job";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setIsLoading(false);
      setJobs(newJobs);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <Loading />
      </section>
    );
  }

  const {id, order, dates, title, company, duties} = jobs[currentJobIndex];
  return (
    <section className="section">
      <div className="title">
        <h2>our experience</h2>
        <div className="underline"></div> 
      </div>
          <Job
            key={id}
            order={order}
            dates={dates}
            title={title}
            company={company}
            duties={duties}
            jobs={jobs}
            currentJob={setCurrentJobIndex}
            currentJobIndex={currentJobIndex}
          />
    </section>
  );
}

export default App;
