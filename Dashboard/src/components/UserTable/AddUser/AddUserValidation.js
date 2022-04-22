export const AddUserValidator = (user, role) => {
    const errors = {}
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
    const nameRegex = /^[a-z ,.'-]+$/i
  
    if (!user.name) {
      errors.name = "Username is required"
    } else if (!nameRegex.test(user.name)) {
      errors.name = "Please enter a valid name"
    }
    if (!user.email) {
      errors.email = "Email is required"
    } else if (!regex.test(user.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!role) {
      errors.role = "Please select one value"
    }
    if (!user.password) {
      errors.password = "Password is required"
    }
    return errors
  }