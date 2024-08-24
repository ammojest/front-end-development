import React from "react";

const github = () => {
  return (
    <>
      <div className="flex justify-center items-center py-5">
        <h1>Guides: Github</h1>
      </div>
      <div>
        <h2>Guide: Adding a new local directory to a new Github repo</h2>
        <ul>
          <li>git init</li>
          <li>git remote add origin</li>
          <li>git add .</li>
          <li>git commit -m &quot;Initial commit&quot;</li>
          <li>git push -u origin main</li>
        </ul>
      </div>
    </>
  );
};

export default github;
