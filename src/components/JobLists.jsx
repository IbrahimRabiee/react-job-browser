import Job from "./Job";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

const JobLists = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const limit = isHome ? "?_limit=3" : "";
      try {
        const res = await fetch(`/api/jobs${limit}`);
        // if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="caret-transparent bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>

        {loading ? (
          <Spinner className="" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return <Job key={job.id} job={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobLists;
