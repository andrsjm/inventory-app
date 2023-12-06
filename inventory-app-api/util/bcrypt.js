import bcrypt from "bcrypt"

export const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds)
}

export const getHashedPassword = async (password) => {
  await hashPassword(password).then((hashedPassword) => {
      password = hashedPassword
  }).catch((err) => {
      console.log(err);
      password = ''
  })

  return await password
}

export const comparedPassword = async (password, hashedPassword) => {
  let valid
  await bcrypt.compare(password, hashedPassword).then((isMatch) => {
      valid = isMatch
  }).catch((err) => {
      console.log(err);
      return false
  })

  return await valid
}