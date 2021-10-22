function SubscriberForm({ email, name, handleName }) {
  return (
    <fieldset>
      <legend>Form</legend>

      <label htmlFor="name">
        Name:
        <input id="name" type="text" value={name} />
      </label>

      <br></br>
      <br></br>

      <label htmlFor="email">
        Email:
        <input id="email" type="text" value={email} />
      </label>

      <br></br>
      <br></br>

      <button type="submit">Submit</button>
    </fieldset>
  );
}

export default SubscriberForm;
