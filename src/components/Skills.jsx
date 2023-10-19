import React from 'react';

function Projectprops(props) {
  const { name, techStack, description } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Tech Stack: {techStack}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Projectprops;