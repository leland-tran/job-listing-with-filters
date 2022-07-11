import React, { useState, useEffect } from 'react';
import Header from './Header';
import JobPost from './JobPost';
import data from './../data.json';
import closeTag from './../images/icon-remove.svg';

export default function Listings() {
  const [selectedTags, setSelectedTags] = useState([]);

  function addFilter(tag) {
    setSelectedTags(prevTag =>
      !prevTag.includes(tag) ? [...prevTag, tag] : [...prevTag]
    );
  }

  function clearTags() {
    setSelectedTags(() => []);
  }

  function removeTag(tag) {
    setSelectedTags(prevTag => prevTag.filter(prev => prev !== tag));
  }

  const renderFilteredTags = selectedTags.map(tag => (
    <>
      <div className="selectedTagContainer">
        <span>{tag}</span>
        <button onClick={() => removeTag(tag)} className="closeTag">
          <img src={closeTag} alt="Remove Tag" />
        </button>
      </div>
    </>
  ));

  const renderJobPost = data.map(job => {
    const tagsList = [job.role, job.level, ...job.languages, ...job.tools];

    if (selectedTags.every(tag => tagsList.includes(tag))) {
      return (
        <JobPost
          key={job.id}
          company={job.company}
          logo={job.logo}
          isNew={job.new}
          isFeatured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          addFilter={addFilter}
          tagsList={tagsList}
        />
      );
    }
  });

  return (
    <>
      <Header />
      <main className="job-listings">
        <section
          style={{ display: selectedTags == false && 'none' }}
          className="filters container"
        >
          <div className="filter-container">{renderFilteredTags}</div>
          <button onClick={clearTags} className="btn-clear">
            Clear
          </button>
        </section>
        {renderJobPost}
      </main>
    </>
  );
}
