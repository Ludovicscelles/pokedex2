function InputMessage({ setMessage }) {
  function handleChange(e) {
    setMessage(e.target.value);
  }
  return <input name="message" onChange={handleChange} />;
}

export default InputMessage;
