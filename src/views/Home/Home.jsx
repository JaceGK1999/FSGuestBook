import React from 'react';
import NewEntry from '../../components/CreateEntry/CreateEntry';
import Entry from '../GuestLogs/GuestLogs';
import Header from '../Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <NewEntry />
      <Entry />
    </div>
  );
}
