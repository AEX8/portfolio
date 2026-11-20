// Contact details shown on the Contact page
import { PLANETS } from '../lib/orbit';

export const EMAIL = 'wethmingayath@gmail.com';

export const LINKEDIN = {
  url: 'https://www.linkedin.com/in/gayath-wethmin/',
  handle: 'Gayath Wethmin Kaluwahewa',
};

// Same GitHub link as the solar system
const githubUrl = PLANETS.find((p) => p.key === 'github')?.href ?? 'https://github.com/AEX8';
export const GITHUB = {
  url: githubUrl,
  handle: githubUrl.replace('https://', ''),
};

// Discord username, and the numeric user ID for the profile link (both optional until filled in)
export const DISCORD = {
  username: 'gwkx8',
  userId: '879561870024003604',
};

// Temporary wording, to be replaced
export const AVAILABILITY = 'Open to graduate software roles';
export const LOCATION = 'Melbourne, Australia';
export const TIME_ZONE = 'Australia/Melbourne';
