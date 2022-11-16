import { GetStaticPaths, GetStaticProps } from 'next';
import { pathsNext } from 'utils/paths';
import { fetchData } from './api/fetchData';

export default function Page({ data }) {
  console.log(data);
  return <h1>Oi</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: pathsNext,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;
  const data = await fetchData(slug);
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
