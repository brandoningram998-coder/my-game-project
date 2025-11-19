export type Game = {
  id: number;
  title: string;
  slug: string;
  thumbnail_url: string;
  category: string;
  tags: string[];
  description: string;
  how_to_play: string;
  editors_review: string;
  file_url: string;
  play_count: number;
  created_at: string;
  updated_at: string;
};

export type CategorySummary = {
  slug: string;
  title: string;
  description: string;
  color?: string;
};
