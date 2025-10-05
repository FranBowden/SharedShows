import "dotenv/config";

const apiKey = process.env.WATCHMODE_API_KEY;

export async function fetchFilms() {
  try {
    const url = `https://api.watchmode.com/v1/sources/?apiKey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Response Not OK: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Error: ", e);
    return [];
  }
}
