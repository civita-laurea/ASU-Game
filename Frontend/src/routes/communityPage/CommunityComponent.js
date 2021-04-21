import React from "react";
import Entry from "./Entry";
import Community from "./Community";



function createEntry(communityTerm) {
  return (
    <Entry
      key={communityTerm.id}
      
      name={communityTerm.name}
      description={communityTerm.meaning}
    />
  );
}

function CommunityComponent() {
  return (
    <div>
      <h1>
        <span>Community</span>
      </h1>
      <dl className="dictionary">{Community.map(createEntry)}</dl>
    </div>
  );
}

export default CommunityComponent;