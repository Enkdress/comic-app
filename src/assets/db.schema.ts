export const createSchema: string = `
CREATE TABLE IF NOT EXISTS bookmarks (
    id INTEGER PRIMARY KEY NOT NULL,
    comic TEXT NOT NULL,
    createdAt INTEGER DEFAULT (strftime('%s', 'now'))
);
`;
