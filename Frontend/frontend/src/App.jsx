import { Routes, Route, Link } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";
import ScheduledList from "./pages/ScheduledList";
import SentList from "./pages/SentList";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ReachInbox Assignment</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/schedule">Schedule Email</Link> {" | "}
        <Link to="/scheduled">Scheduled Emails</Link> {" | "}
        <Link to="/sent">Sent Emails</Link>
      </nav>

      <Routes>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/scheduled" element={<ScheduledList />} />
        <Route path="/sent" element={<SentList />} />
      </Routes>
    </div>
  );
}
