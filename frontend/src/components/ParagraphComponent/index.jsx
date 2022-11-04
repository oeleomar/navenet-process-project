export const ParagraphComponent = ({ data: { data } }) => {
  return <p dangerouslySetInnerHTML={{ __html: data.text }}></p>;
};
