
// utils/validators.js

// Validate that name is non-empty and only letters/spaces
export function validateName(name) {
  if (!name || name.trim().length === 0) {
    return 'Name is required.'
  }
  if (!/^[A-Za-z ]+$/.test(name.trim())) {
    return 'Name must contain only letters and spaces.'
  }
  return null // No error
}

// Validate email format is standard
export function validateEmail(email) {
  if (!email || email.trim().length === 0) {
    return 'Email is required.'
  }
  // Simple email regex for basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address.'
  }
  return null
}

// General user validator for forms
export function validateUser({name, email}) {
  const errors = {}
  const nameErr = validateName(name)
  if (nameErr) errors.name = nameErr

  const emailErr = validateEmail(email)
  if (emailErr) errors.email = emailErr

  return errors
}
