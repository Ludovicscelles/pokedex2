function Article({ name, emoji }) {
  return (
    <li key={emoji}>
      {name} {emoji}
    </li>
  );
}

export default Article;
