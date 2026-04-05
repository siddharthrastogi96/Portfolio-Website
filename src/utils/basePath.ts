export const baseUrl = import.meta.env.BASE_URL;

export const withBase = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${baseUrl}${normalizedPath}`;
};
