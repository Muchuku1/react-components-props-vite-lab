function makeEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";
  
  
  const count = Math.ceil(minutes / interval);
  
  return emoji.repeat(count);
}


function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = minutes ? `${makeEmojiList(minutes)} ${minutes} min read` : null;

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {emojis && `• ${emojis}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;