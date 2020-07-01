const createProgression = (progression) => (a1, n, d) => {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res.push(progression(a1, i + 1, d));
  }
  return res;
};

export default createProgression;
