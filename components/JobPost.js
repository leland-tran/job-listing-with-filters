import React from 'react';

export default function JobPost(props) {
  const renderTags = props.tagsList.map(tag => (
    <div onClick={() => props.addFilter(tag)} className="jobpost-tag">
      {tag}
    </div>
  ));

  return (
    <section className="jobpost container">
      <div className="jobpost-description">
        <img
          className="jobpost-logo"
          src={require(`./../images/${props.logo}`)}
          alt={`${props.company} logo`}
        />
        <div className="jobpost-main">
          <div className="jobpost-head">
            <h3 className="jobpost-name">{props.company}</h3>
            <div className="post-tag">
              <span
                style={{ display: !props.isNew && 'none' }}
                className="jobpost-category new"
              >
                New!
              </span>
              <span
                style={{ display: !props.isFeatured && 'none' }}
                className="jobpost-category featured"
              >
                Featured
              </span>
            </div>
          </div>
          <h2 className="jobpost-position">{props.position}</h2>
          <p className="jobpost-info">
            {props.postedAt}
            <span></span>
            {props.contract}
            <span></span>
            {props.location}
          </p>
        </div>
      </div>
      <div className="jobpost-separator"></div>
      <div className="jobpost-tags">
        <div className="tag-container">{renderTags}</div>
      </div>
    </section>
  );
}
