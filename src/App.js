// import logo from './logo.svg';
import './App.css';

import ProfileCard from './components/ProfileCard';
import { useEffect, useState } from 'react';
import writers from './writers';
// import writers from './writers';
import ProfileForm from './components/ProfileForm';

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Emmanuel",
      lastName: "Asmah",
      email: "atbhae100@gmail.com",
      phone: "+233 55 307 5803",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  }

return (
    <div>
      <h1>Writer Profiles</h1>
     <div className="container">
       <ProfileForm submit={submit} />
         {allProfile.map((writer) => (
         <ProfileCard key={writer.id} writer={writer} />
         ))}
      
       </div>
       </div>
);
};

export default App;
