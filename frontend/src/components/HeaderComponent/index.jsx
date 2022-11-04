export const HeaderComponent = ({ data: { data } }) => {
  if (data.level === 1) {
    return <h1>{data.text}</h1>;
  } else if (data.level === 2) {
    return <h2>{data.text}</h2>;
  } else {
    return <h3>{data.text}</h3>;
  }
};
