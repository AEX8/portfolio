// Layout and maths for the solar system navigation.
// Shared by the server render and the browser animation.

export const VIEW = { w: 900, h: 560, cx: 450, cy: 280 };

// How flat the orbits look (1 = circle) and how much the plane is turned
export const BASE_TILT = 0.48;
export const BASE_TURN = -0.24;

// Phones turn the plane a little further left so it fits the narrow screen
export const PHONE_TURN = -0.4;
export const PHONE_QUERY = '(max-width: 640px)';

// Fading trail behind each planet: how long (degrees) and how many pieces
export const TRAIL = { length: 80, segments: 18 };

export type PlanetKey = 'projects' | 'experience' | 'education' | 'contact' | 'github';

export interface Planet {
  key: PlanetKey;
  label: string;
  hint: string;
  href: string;
  external?: boolean;
  radius: number; // orbit size in view units
  angle: number; // resting spot on the orbit, in degrees (90 is front)
  float: number; // how far it drifts along its orbit (bigger = further)
  speed: number; // hover speed
}

export const PLANETS: Planet[] = [
  { key: 'contact', label: 'Contact', hint: "Let's talk", href: '/contact', radius: 118, angle: 32, float: 9, speed: 0.9 },
  { key: 'github', label: 'GitHub', hint: 'Code & contributions', href: 'https://github.com/AEX8', external: true, radius: 174, angle: 236, float: 10, speed: 0.75 },
  { key: 'projects', label: 'Projects', hint: 'Featured work', href: '/projects', radius: 230, angle: 318, float: 11, speed: 0.65 },
  { key: 'education', label: 'Education', hint: 'RMIT and learning', href: '/education', radius: 286, angle: 92, float: 11, speed: 0.6 },
  { key: 'experience', label: 'Experience', hint: "Where I've worked", href: '/experience', radius: 340, angle: 142, float: 12, speed: 0.55 },
];

export interface Point {
  x: number;
  y: number;
  depth: number; // -1 at the back, 1 at the front
}

// Position of a point on a tilted, turned orbit
export function project(radius: number, angleDeg: number, tilt = BASE_TILT, turn = BASE_TURN): Point {
  const a = (angleDeg * Math.PI) / 180;
  const x0 = radius * Math.cos(a);
  const y0 = radius * Math.sin(a) * tilt;
  return {
    x: VIEW.cx + x0 * Math.cos(turn) - y0 * Math.sin(turn),
    y: VIEW.cy + x0 * Math.sin(turn) + y0 * Math.cos(turn),
    depth: Math.sin(a),
  };
}

// Planets at the front look a little bigger and brighter
export function depthScale(depth: number) {
  return 0.82 + (depth + 1) * 0.14;
}

// Path pieces for the trail behind a planet, from the faint tail to the bright head
export function trailPaths(radius: number, angleDeg: number, tilt = BASE_TILT, turn = BASE_TURN): string[] {
  const step = TRAIL.length / TRAIL.segments;
  const start = angleDeg - TRAIL.length;
  const paths: string[] = [];
  for (let i = 0; i < TRAIL.segments; i++) {
    // Three points per piece keeps the curve smooth
    const pts = [0, 0.5, 1.05].map((k) => project(radius, start + (i + k) * step, tilt, turn));
    paths.push(`M${pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join('L')}`);
  }
  return paths;
}

// Opacity of each trail piece: fades in from the tail
export function trailOpacity(i: number) {
  return (((i + 1) / TRAIL.segments) ** 1.6 * 0.7).toFixed(3);
}
