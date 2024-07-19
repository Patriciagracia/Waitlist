import React, { useRef, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

export default function App() {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1vn1xqn", "template_qftdfyn", form.current, {
        publicKey: "plXp3az9eGw-NO_nS",
      })
      .then(
        () => {
          setConfirmationMessage("Success! Email confirmation sent.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {confirmationMessage && (
        <div className="alert alert-success">{confirmationMessage}</div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="What's your name?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="user_name"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email address (e.g., patricia@hire-me.com)"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="user_email"
          />
          <input
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
            value="Send"
          />
        </div>
      </form>
    </>
  );
}
