import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";

function App() {
  const [name, setName] = useState("");
  const toggleName = (event) => setName(event.target.value);

  const [email, setEmail] = useState("");
  const toggleEmail = (event) => setEmail(event.target.value);

  return (
    <>
      <SubscriberForm name={name} handleName={toggleName} email={email} />
    </>
  );
}

export default App;
