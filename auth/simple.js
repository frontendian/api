module.exports = {
  allowEmptyUsername: true,
  validate: (request, username, password) => {
    const { ADMIN_PASSWORD } = process.env

    if (ADMIN_PASSWORD && ADMIN_PASSWORD === password) {
      return { 
        credentials: { 
          user: 'admin' 
        }, 
        isValid: true 
      }
    } else {
      return { credentials: null, isValid: false }
    }
  }
}
