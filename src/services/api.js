export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export const addUser = async user => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'},
  })
  return res.json()
}

export const updateUser = async (id, user) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'},
  })
  return res.json()
}

export const deleteUser = async id => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
}
