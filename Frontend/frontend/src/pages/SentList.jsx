import { useEffect, useState } from "react";
import axios from "axios";

export default function SentList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sent-emails")
      .then((res) => setList(res.data))
      .catch(() => console.log("Error"));
  }, []);

  return (
    <div>
      <h2>Sent Emails</h2>

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
