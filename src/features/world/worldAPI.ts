import { API_URL } from '@/utils/constants';
import { WorldState } from './types';

export default async function worldAPI(): Promise<WorldState[]> {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
