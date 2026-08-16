import React from "react";
import blogData from "./data/blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

console.log(blogData);

const posts = [
    {
      title: "BMW G80 M3",
      date: "September 23, 2020",
      preview: "Bayerische Motoren Werke.",
    },
    {
      title: "Audi F5 A5",
      date: "January 1, 2016",
      preview: "A 5-seater sedan with both comfort and performance.",
    },
    {
      title: "Volskswagen Golf MK7.5",
      date: "November 10, 2016",
      preview: "A 5-seater hatchback with great german engineering performance.",
    },
  ];

function App() {
  return (
    <div className="App">
      <Header name= "Muchuku's blog"/>
      <About about="Welcome to my blog, this is a blog about cars. Enjoy"/>
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
