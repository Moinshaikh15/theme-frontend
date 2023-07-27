import React from "react";

export default function Home() {
  return (
    <div id="home">
      <h2>HOME </h2>
      <div className="content">
        <p>
          Hello My name is <b>Moin Shaikh</b>
        </p>

        <p>
          {" "}
          This solution implements real-time theme updates using Socket.IO.
        </p>
        <p>
          When a user changes the theme, the new theme is instantly reflected on
          the current page and all other pages where the user has opened the web
          app. This real-time update is achieved by leveraging the power of
          Socket.IO.
        </p>
        <h4>Here's a brief overview of how the functionality works:</h4>
        <ol>
          <li>
            <b>Socket.IO Connection:</b> When a user opens the web app, a
            connection to the Socket.IO server is established.
          </li>
          <li>
            <b>Theme Check:</b> Upon connection, the user's theme preference is
            checked by emitting a "theme_check" message to the server, along
            with the user's ID.
          </li>
          <li>
            <b>Real-Time Update:</b> When the server receives the "theme_check"
            message, it checks the user's theme preference and sends a
            "theme-updated" message back to the client.
          </li>
          <li>
            <b>Applying Theme:</b> Upon receiving the "theme-updated" message,
            the client updates the theme by dynamically changing the CSS
            variables (e.g., background color, text color) using the received
            theme preference data, if the theme-update messages is for the
            client.
          </li>
        </ol>
        <p>
          The Socket.IO connection allows real-time communication between the
          client and server, enabling the immediate application of theme updates
          across all pages where the user has opened the web app. This makes for
          a seamless and dynamic user experience.
        </p>

        <br />
        <h3>Tech Stack used</h3>
        <div className="stack-div">
          <div className="stacks">
            <b>Frontend:</b>
            <ul>
              <li>React</li>
              <li>Socket-client</li>
              <li>Browser Router</li>
              <li>Sass/Scss</li>
              <li>Vercel</li>
            </ul>
          </div>

          <div className="stacks">
            <b>Backend:</b>
            <ul>
              <li>Node Js</li>
              <li>Express Js</li>
              <li>Socket.io</li>
              <li>PostgreSQL</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
