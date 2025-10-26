import {useState} from 'react'
import './index.css'

const UserForm = ({onSubmit, editingUser, onCancel}) => {
  const [name, setName] = useState(editingUser ? editingUser.name : '')
  const [email, setEmail] = useState(editingUser ? editingUser.email : '')

  const handleSubmit = e => {
    e.preventDefault()
    if (name && email) onSubmit({name, email, id: editingUser?.id})
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
      {editingUser && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default UserForm
