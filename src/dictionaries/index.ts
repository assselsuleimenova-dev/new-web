import type { Dictionary } from './ru';
export type { Dictionary };
export type Lang = 'ru' | 'kk';

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  if (lang === 'kk') {
    const { kk } = await import('./kk');
    return kk;
  }
  const { ru } = await import('./ru');
  return ru;
}
