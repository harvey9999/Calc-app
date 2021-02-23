export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const confirmPasswordValidator = (
  password: string,
  confirmPassword: string
) => {
  if (
    !password ||
    !confirmPassword ||
    confirmPassword.length <= 5 ||
    password !== confirmPassword
  )
    return 'Password must match.';
  return '';
};
