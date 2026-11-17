// Content for the Me page

// Short paragraphs about me, in order
export const STORY: string[] = [
  "I've always loved building things, and technology is where I get to do that every day. I believe it will shape the future, and if it's handled well it can have a huge positive impact on people's lives.",
  'What I enjoy most is building things with real, practical value. Tools that people actually enjoy using, and that help them get more done with less effort.',
];

// The line that sums it up, shown on its own
export const MOTTO = 'I want to contribute more than I consume.';

// Interests, each with a small line icon
export type InterestIcon = 'space' | 'anime' | 'football' | 'gaming';

export const INTERESTS: { label: string; icon: InterestIcon }[] = [
  { label: 'Space', icon: 'space' },
  { label: 'Anime', icon: 'anime' },
  { label: 'Football', icon: 'football' },
  { label: 'Gaming', icon: 'gaming' },
];
