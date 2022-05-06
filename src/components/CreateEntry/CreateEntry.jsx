import { useState } from 'react';
import { createEntry } from '../../services/entries';

export default function NewEntry() {
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = async () => {
    const entry = await createEntry({ content: newEntry });
    setNewEntry('');
    console.log(entry);
  };
  return (
    <div>
      <input
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        type="text"
        placeholder="Add new entry"
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
