import Article from "./Article";

function ArticleList({posts}) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.title}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;