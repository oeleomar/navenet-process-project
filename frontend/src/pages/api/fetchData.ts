import config from '../../config/index';
import axios from 'axios';

export const fetchData = async (setor: string | string[]) => {
  try {
    const data = await axios(config.url + config.slugProcess + setor);
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
