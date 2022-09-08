import md5 from 'md5';
// crea un hash apartir de un correo electronico

const gravatar = (email) => {
  const base = 'http://gravatar.com/avatar/';
  const formattedEmail = email?(email).trim().toLowerCase():'';
  const hash = md5(formattedEmail, { encoding: "binary" });
  return `${base}${hash}`;
}

export default gravatar;