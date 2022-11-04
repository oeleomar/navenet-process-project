export const ListComponent = ({ data: { data, id } }) => {
  if (data.style === "unordered") {
    return (
      <ul>
        {data.items.map((val) => (
          <li key={val + id} dangerouslySetInnerHTML={{ __html: val }}></li>
        ))}
      </ul>
    );
  } else {
    return (
      <ol>
        {data.items.map((val) => (
          <li
            key={Math.random() + val}
            dangerouslySetInnerHTML={{ __html: val }}
          ></li>
        ))}
      </ol>
    );
  }
};
