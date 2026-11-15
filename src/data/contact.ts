// Contact details shown on the Contact page
import { PLANETS } from '../lib/orbit';
import { CV_PATH } from './experience';

export const EMAIL = 'wethmingayath@gmail.com';

export const LINKEDIN = {
  url: 'https://www.linkedin.com/in/gayath-wethmin-kaluwahewa-a4a7b82a3/',
  handle: 'Gayath Wethmin Kaluwahewa',
};

// Same GitHub link as the solar system
const githubUrl = PLANETS.find((p) => p.key === 'github')?.href ?? 'https://github.com/AEX8';
export const GITHUB = {
  url: githubUrl,
  handle: githubUrl.replace('https://', ''),
};

// Shared with the Experience page download button
export const CV = CV_PATH;

// Temporary wording, to be replaced
export const AVAILABILITY = 'Open to graduate software roles';
export const LOCATION = 'Melbourne, Australia';
