import React from "react";
import Entry from "./Entry";
import community from "../community";



function createEntry(communityTerm) {
  return (
    <Entry
      key={communityTerm.id}
      // emoji={communityTerm.emoji}
      name={communityTerm.name}
      description={communityTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Community</span>
      </h1>
      <dl className="dictionary">{community.map(createEntry)}</dl>
    </div>
  );
}

export default App;
