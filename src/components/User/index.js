//https://62dc08084438813a261000af.mockapi.io/demoapi/users
//https://mockapi.io/projects/62dc08084438813a261000b0
import { useState, useEffect } from 'react';

function User() {
  const [user, setUser] = useState(null);

  async function fetchUserData(ulr) {
    const response = await fetch(ulr);
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUserData('https://62dc08084438813a261000af.mockapi.io/demoapi/users');
  }, []);

  if (!user) {
    return 'loading...';
  }
  return (
    <>
      {user.items.map((u, index) => (
        <img key={index} src={u.image} alt={u.title} />
      ))}
      <img src="https://drive.google.com/file/d/1x2_Zgiq9DSoEHShvCNms40NRZXGQ1fns/view?usp=sharing" alt="none" />
    </>
  );
}

export default User;