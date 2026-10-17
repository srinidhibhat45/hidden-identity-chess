CREATE TABLE `chess_rooms` (
	`code` text PRIMARY KEY NOT NULL,
	`state` text NOT NULL,
	`white_hash` text NOT NULL,
	`black_hash` text,
	`revision` integer DEFAULT 0 NOT NULL,
	`updated_at` integer NOT NULL
);
