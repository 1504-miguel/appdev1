import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserList from './UsersFetch'
import PostList from './PostsFetchAsync'
import TodoList from './TodosFetchAxios'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserList />
    <PostList />
    <TodoList />
  </StrictMode>,
)
