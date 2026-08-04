import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>
      <h1>Contact Me</h1>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Live Character Count */}
      <p>Character Count: {message.length}</p>

      <h3>Your Message:</h3>
      <p>{message}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>

      {showHelp && (
        <p>Please enter your message above.</p>
      )}
    </div>
  );
}

export default Contact;