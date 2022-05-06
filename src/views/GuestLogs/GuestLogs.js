import { useEffect, useState } from 'react';
import { getEntries } from '../../services/entries';

export default function Entry() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const data = await getEntries();
      setEntries(data);
    };
    fetchTodoData();
  }, []);

  return (
    <ul className="entry-list">
      {entries.map((item) => (
        <li key={item.id}>
          {item.content} - {item.user.email} - {item.date}
        </li>
      ))}
    </ul>
  );
}
