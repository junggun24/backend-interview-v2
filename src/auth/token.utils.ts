import { jwtDecode } from 'jwt-decode';

export function parsingTokenUserId(token: string): number {
  try {
    const { userId } = jwtDecode<{ userId: number }>(token);
    return userId;
  } catch (error) {
    return null;
  }
}
