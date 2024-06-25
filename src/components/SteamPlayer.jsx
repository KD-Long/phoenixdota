import React, { useEffect, useState } from 'react';

const SteamPlayer = ({ steamId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // note we are setting the cors on the GCP function to allow any origin
        // we could restric this to our website to prevent external use (tho I think the invocations still cost they just wont be able to use the data)
        const response = await fetch(`https://australia-southeast1-ecom-416900.cloudfunctions.net/steam-api-get-player?steamid=${steamId}`);
                            
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        setProfile(data.response.players[0]);

        console.log('data returned: ', data.response.players[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProfile();
  }, [steamId]);

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg">
      {profile ? (
        <>
          <img src={profile.avatarfull} alt={profile.personaname} className="w-24 h-24 rounded-full" />
          <h2 className="text-xl mt-2">{profile.personaname}</h2>
          <a href={profile.profileurl} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-1">
            View Steam Profile
          </a>
          <p className="mt-1">Steam ID: {profile.steamid}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SteamPlayer;
