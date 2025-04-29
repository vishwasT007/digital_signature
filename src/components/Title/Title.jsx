function Title({ title, classes, name }) {
  return (
    <h1 className={!classes ? "" : classes}>
      {!name ? "" : name} {!name ? "" : ":"} {!title ? "" : title}
    </h1>
  );
}

export default Title;
