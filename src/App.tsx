import { Header } from "./components/Header";
import { Siderbar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://www.github.com/felipemimoura.png",
      name: "Felipe Moura",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um project que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://www.github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um project que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-01-10 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
