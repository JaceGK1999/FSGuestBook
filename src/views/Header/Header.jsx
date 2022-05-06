import React from 'react';
import { useUserContext } from '../../context/UserContext';
import { signOutUser } from '../../services/user';

const handleLogout = async () => {
  await signOutUser();
  window.location.reload();
};

export default function Header() {
  const { currentUser } = useUserContext();
  return (
    <div>
      {currentUser.email && (
        <div>
          {currentUser.email} - <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!currentUser.email && <p>Please sign In below</p>}
    </div>
  );
}
