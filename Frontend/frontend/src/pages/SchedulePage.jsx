import { useState } from "react";
import axios from "axios";

export default function SchedulePage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [startTime, setStartTime] = useState("");
  const [delayBetween, setDelayBetween] = useState(2000);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const payload = {
        subject,
        body,
        emails: [email],                 // must be an array
        startTime: startTime + ":00",    // add seconds
        delayBetween: parseInt(delayBetween)
      };

      const res = await axios.post(
        "http://localhost:5000/api/schedule",
        payload
      );

      setMessage("Email scheduled successfully");
    } catch (err) {
      console.log(err);
      setMessage("Error scheduling email");
    }
  };

  return (
    <div>
      <h2>Schedule Email</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      /><br /><br />

      <textarea
        placeholder="Message Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /><br /><br />

      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      /><br /><br />

      <input
        type="number"
        value={delayBetween}
        onChange={(e) => setDelayBetween(e.target.value)}
      /><br /><br />

      <button onClick={handleSubmit}>Schedule</button>

      <p>{message}</p>
    </div>
  );
}
