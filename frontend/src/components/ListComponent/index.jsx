export const ListComponent = ({ data: { data } }) => {
  if (data.style === "unordered") {
    return (
      <ul>
        {data.items.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <ol>
        {data.items.map((val) => (
          <li key={Math.random() + val}>{val}</li>
        ))}
      </ol>
    );
  }
};
