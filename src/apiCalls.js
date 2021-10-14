export const fetchData = async (path) => {
  const bearer =
    'Bearer ' +
    '993a1943848ae99388901820d93b556d71c8e17ec1e4c1a9d0eeb866f37982f66dc46a4da393bfe9110313134d0dd160';

  const optionsObject = {
    method: 'GET',
    headers: { Authorization: bearer, Accept: 'application/json' },
  };

  const res = await fetch(`http://phish.in/api/v1/${path}`, optionsObject);
  return await res.json();
};
