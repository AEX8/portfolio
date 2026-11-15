// 8 x 8 pixel letters with double width strokes.
// A and Y use straight diagonals, G has a stepped curve.
// '#' is a filled cell, '.' is empty.
// '<' and '>' are filled cells nudged slightly left or right, to open a small gap.
export const GLYPH_WIDTH = 8;
export const GLYPH_HEIGHT = 8;

const GLYPHS: Record<string, string[]> = {
  G: [
    '..#####.',
    '.##...##',
    '##......',
    '##......',
    '##..####',
    '##....##',
    '.##...##',
    '..#####.',
  ],
  // Straight diagonals: the sides move out one cell every two rows.
  // Just under the tip, the two pairs part slightly.
  A: [
    '...##...',
    '...##...',
    '..<<>>..',
    '..<<>>..',
    '.##..##.',
    '.######.',
    '##....##',
    '##....##',
  ],
  // Straight arms: one cell in per row, then the stem
  Y: [
    '##....##',
    '.##..##.',
    '..####..',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
  ],
  T: [
    '########',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
  ],
  H: [
    '##....##',
    '##....##',
    '##....##',
    '########',
    '##....##',
    '##....##',
    '##....##',
    '##....##',
  ],
};

// A cell is null when empty, otherwise its nudge: -1 left, 0 none, 1 right
export type Cell = number | null;

const NUDGE: Record<string, Cell> = { '#': 0, '<': -1, '>': 1 };

// Joins letters into one grid of cells
export function textToGrid(text: string, gap = 2): Cell[][] {
  const letters = text.toUpperCase().split('');
  const rows: Cell[][] = Array.from({ length: GLYPH_HEIGHT }, () => []);

  letters.forEach((char, i) => {
    const glyph = GLYPHS[char];
    if (!glyph) throw new Error(`No pixel glyph for "${char}"`);

    for (let y = 0; y < GLYPH_HEIGHT; y++) {
      for (const cell of glyph[y]) rows[y].push(NUDGE[cell] ?? null);
      if (i < letters.length - 1) {
        for (let g = 0; g < gap; g++) rows[y].push(null);
      }
    }
  });

  return rows;
}
