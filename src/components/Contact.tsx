import { useState } from "react";
import Github from "./Github";



export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "", submitted: false });

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

  };

  return (
    <div id="contact" className="contactForm w-full bg-[#dddbbe] p-8 pb-16 sm:p-16">
        {!state.submitted ? (
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-4xl">Send me a message ...</h2>
            <p className="text-base sm:text-lg">Feel free to reach out to me here if you would like to work on something together.</p>
            <form onSubmit={handleSubmit} name="contact" className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-4 md:col-span-1 text-sm sm:text-base">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Your name</label>
                  <input
                    className="p-2 text-black"
                    id="name"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Your email</label>
                  <input
                    className="p-2 text-black"
                    id="email"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-1 text-sm sm:text-base">
                <label htmlFor="message">Your message</label>
                <textarea
                  className="min-h-32 p-1 text-black"
                  id="message"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="self-end rounded-lg p-2.5 text-black text-lg bg-[#c8cc92] shadow-sm transition text-sm sm:text-base hover:opacity-80">Send</button>
              </div>
            </form>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
              <p className="text-base sm:text-lg">Or visit my GitHub profile to see what I&#39;m working on ➵ </p>
              <Github 
                fill="black"
              />
            </div>
          </div>
        ) : (
          <div className="md:text-center">
            <div className="text-lg">Merci ♥</div>
          </div>
        )}
    </div>
  );
}