import './index.css'

const UserList = ({users, onEdit, onDelete, onSearch}) => (
  <div className="user-list">
    <input type="text" placeholder="Search users" onChange={onSearch} />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button type="button" onClick={() => onEdit(user)}>
                Edit
              </button>
              <button type="button" onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default UserList
