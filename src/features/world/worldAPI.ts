import { API_URL } from '@/utils/constants';
import { WorldInfo } from './types';

export default async function worldAPI(): Promise<WorldInfo[]> {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
