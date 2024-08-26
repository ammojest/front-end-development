import React from "react";

const page = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <main className="w-full">
        <div className="flex justify-center h-[50vh] flex-col items-center py-5">
          <h1>Front-end Components</h1>
          <p>Here's some exapmple of the components I have created;</p>
          <ul>
            <li>Navigations</li>
            <li>Tables</li>
            <li>Forms</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default page;
