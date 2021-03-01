// Case-insensitive sorting
const compareIgnoreCase = (a, b) => {
  let r1 = (a && a.toLowerCase()) || '';
  let r2 = (b && b.toLowerCase()) || '';
  if (r1 < r2) {
    return -1;
  }
  if (r1 > r2) {
    return 1;
  }
  return 0;
};

export default compareIgnoreCase;
