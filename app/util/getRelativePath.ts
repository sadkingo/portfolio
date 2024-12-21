function getWithBaseUrl(endpoint: string): string {
  if (!endpoint.startsWith("/")) endpoint = "/" + endpoint;
  const baseUrl =
    typeof window !== "undefined"
      ? ""
      : process.env.NEXT_APP_URL ?? "http://localhost:3000";
  console.log(typeof window);
  return `${baseUrl}${endpoint}`;
}

export default getWithBaseUrl;
