const isAuthenticated = async (req) => {
  const { cookie } = req.headers;

  const auth = cookie.split(' ').find((el) => el.includes('user'));

  if (!auth) return redirect(result);

  const [_, user] = auth.split('=');

  const result = { props: {} };

  if (user === 'null') return redirect(result);
  result.props.user = user;

  return result;
};

const redirect = (result) => {
  result.redirect = { permanent: false, destination: '/' };
  return result;
};

export default isAuthenticated;
