/* This function takes the emails string and splits them, removing any white spaces and stores in a new array, which contains the individual email. It then validates each email for errors. */
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length && invalidEmails[0] !== "") {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
