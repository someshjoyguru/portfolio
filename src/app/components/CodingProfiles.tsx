import React from 'react';
import data from "@/data/data.json";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const CodingProfiles:React.FC = () => {
  return (
    <section className="py-10">
        <h1 className="text-2xl font-bold mb-5">Coding Profiles <span>at a Glance </span><span><Link href="https://codolio.com/profile/someshjoyguru"><FontAwesomeIcon icon={faLink} /></Link></span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.profiles.map((profile) => (
            <div key={profile.id} className="border p-4 rounded-lg shadow-lg text-sm">
              <h2 className="">{profile.platform}</h2>
              <p>Username: {profile.username}</p>
              <p>Max Rating: {profile["max-rating"]}</p>
              <p>Current Rating: {profile["current-rating"]}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default CodingProfiles