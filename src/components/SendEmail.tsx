"use client";

import { SiGmail } from "react-icons/si";
import { sendEmail } from "@/\butils/email";

export function SendEmailIcon() {
  return (
    <button onClick={sendEmail} className="icons">
      <SiGmail />
    </button>
  );
}

export function SendEmailButton() {
  return (
    <button onClick={sendEmail} className="contact-link">
      Email
    </button>
  );
}
