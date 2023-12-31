const isAuthenticated = async (req) => {
  const { cookie } = req.headers;
  const result = { props: {} };

  if (!cookie) return redirect(result);
  const auth = cookie.split(' ').find((el) => el.includes('user'));

  if (!auth) return redirect(result);

  const [_, user] = auth.split('=');

  if (user === 'null') return redirect(result);
  result.props.user = user;

  return result;
};

const redirect = (result) => {
  result.redirect = { permanent: false, destination: '/' };
  return result;
};

export default isAuthenticated;
