import { Post, PostType } from "./components/Post"
import Sidebar from "./components/Sidebar"
import { Header } from "./components/Header"
import styles from "./App.module.css"
import './global.css'



export function App() {

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
        name: 'Avatar 1',
        role: 'CTO @ Desenho'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishiedAt: new Date('2023-03-10 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/119521842?v=4',
        name: 'Avatar 2',
        role: 'CTO @ Filme'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishiedAt: new Date('2023-03-22 20:00:00')
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              post={post}
            />)
          })}

        </main>
      </div>



    </div>
  )
}

