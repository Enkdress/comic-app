export class BookmarkUpgradeStatements {
  bookmarkUpgrades = [
    {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS bookmarks (
            id INTEGER PRIMARY KEY NOT NULL,
            comic TEXT NOT NULL,
            createdAt INTEGER DEFAULT (strftime('%s', 'now'))
        );`,
      ],
    },
  ];
}
