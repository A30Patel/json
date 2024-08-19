import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  let description = job.description;

  if (!showFullDesc) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-gray-50 rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
        </div>

        <div className="mb-5 text-gray-700">{description}</div>
        <button
          onClick={() => setShowFullDesc((prevState) => !prevState)}
          className="text-blue-500 mb-5 hover:text-blue-600"
        >
          {showFullDesc ? 'Less' : 'More'}
        </button>

        <h3 className="text-blue-500 mb-2">{job.salary}/ Year</h3>

        <div className="border border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-pink-600 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
