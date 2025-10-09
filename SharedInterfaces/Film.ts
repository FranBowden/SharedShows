export default interface Film {
  id: number;
  title: string;
  year: number;
  type: string;
  tmdb_id?: number;
  poster?: string | null;
}
