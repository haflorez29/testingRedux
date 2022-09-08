import md5 from 'md5';
// crea un hash apartir de un correo electronico

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formatEmail = (email).trim().toLowerCase();
  const hash = md5(formatEmail, { enconding: "binary" })
  return `${base}${hash}`
}