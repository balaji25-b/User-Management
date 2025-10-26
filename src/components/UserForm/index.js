import {useState} from 'react'
import './index.css'
import {validateUser} from '../../utils/validators'

const UserForm = ({onSubmit, editingUser, onCancel}) => {
  const [name, setName] = useState(editingUser ? editingUser.name : '')
  const [email, setEmail] = useState(editingUser ? editingUser.email : '')
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateUser({name, email})
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      onSubmit({name, email, id: editingUser?.id})
      setName('')
      setEmail('')
      setErrors({})
    }
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
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

