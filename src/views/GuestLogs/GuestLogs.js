import { useEffect, useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { getEntries } from '../../services/entries';

export default function Entry() {
  const [entries, setEntries] = useState([]);
  const { currentUser } = useUserContext();

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
          {item.content} - {currentUser.email} - {item.created_at}
        </li>
      ))}
    </ul>
  );
}
