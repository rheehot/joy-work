import { API_URL } from '@/utils/constants';
import { WorldInfo } from './types';
import axios from 'axios';

export default async function worldAPI(): Promise<WorldInfo[]> {
  const response = await axios.get(API_URL);
  return response.data;
}
