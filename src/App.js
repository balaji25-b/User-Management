import {useEffect, useState} from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import Pagination from './components/Pagination'
import {getUsers, addUser, updateUser, deleteUser} from './services/api'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 5

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const handleAddOrEditUser = async user => {
    if (user.id) {
      await updateUser(user.id, user)
      setUsers(users.map(u => (u.id === user.id ? user : u)))
    } else {
      const newUser = await addUser(user)
      setUsers([...users, newUser])
    }
    setEditingUser(null)
  }

  const handleDeleteUser = async id => {
    await deleteUser(id)
    setUsers(users.filter(u => u.id !== id))
  }

  const handleEditUser = user => setEditingUser(user)

  const handleSearch = e => {
    setQuery(e.target.value)
    setPage(1)
  }

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase()),
  )
  const totalPages = Math.ceil(filteredUsers.length / perPage)
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * perPage,
    page * perPage,
  )

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm
        onSubmit={handleAddOrEditUser}
        editingUser={editingUser}
        onCancel={() => setEditingUser(null)}
      />
      <UserList
        users={paginatedUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onSearch={handleSearch}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}

export default App
