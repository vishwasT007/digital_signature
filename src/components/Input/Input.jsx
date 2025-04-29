function Input({
  type,
  value,
  style,
  onChange,
  placeholder,
  required = false,
}) {
  const handleKeyPress = (event) => {
    // Allow only alphabets and spaces, block numbers
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  };

  const inputProperties = {
    type,
    value,
    style,
    onChange,
    placeholder,
    required,
    onKeyPress: handleKeyPress,
  };

  if (type === "text") {
    inputProperties.pattern = "[A-Za-z\\s]+";
  }
  return <input {...inputProperties} />;
}

export default Input;
