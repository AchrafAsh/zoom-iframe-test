import React from "react";
import "./App.css";

function App() {
  const [meetingId, setMeetingId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [openZoom, setOpenZoom] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeetingId(meetingId.replace(/\s/g, ""));
    setOpenZoom(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="meeting id"
          onChange={(e) => setMeetingId(e.currentTarget.value)}
          value={meetingId}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <input
          type="text"
          placeholder="text"
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
        />
        <input type="submit" value="Join Zoom" />
      </form>
      {openZoom && (
        <div
          className="iframe-container"
          style={{
            overflow: "hidden",
            paddingTop: "56.25%",
            position: "relative",
          }}
        >
          <iframe
            title="zoom"
            allow={"microphone; camera"}
            style={{
              border: "0",
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
            src={`https://zoom.us/wc/${meetingId}/join?prefer=1&pwd=${password}&un=${window.btoa(username)}`}
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
}

export default App;