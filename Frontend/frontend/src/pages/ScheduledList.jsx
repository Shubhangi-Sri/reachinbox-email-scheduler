import { useEffect, useState } from "react";
import axios from "axios";

export default function ScheduledList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/scheduled-emails")
      .then((res) => setList(res.data))
      .catch(() => console.log("Error"));
  }, []);

  return (
    <div>
      <h2>Scheduled Emails</h2>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <strong>{item.email}</strong> — {item.subject}  
          </li>
        ))}
      </ul>
    </div>
  );
}
