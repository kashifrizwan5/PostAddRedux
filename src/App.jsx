import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PostsList from './features/posts/PostsList'
import './App.css'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<AddPostForm/>
			<PostsList/>
    </div>
  )
}

export default App
