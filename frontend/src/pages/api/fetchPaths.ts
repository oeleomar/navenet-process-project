import axios from 'axios';
import config from '../../config/index';

interface paths {
  slug: string;
  id: string;
}

export const fetchPaths = async (setor): Promise<paths> => {
  try {
    const data = await (
      await axios(config.url + config.slugProcess + setor)
    ).data;
    console.log(data);
    return data;
  } catch (e) {}
};
