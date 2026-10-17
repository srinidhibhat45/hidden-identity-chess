# Hidden Identity Chess

An installable mobile and desktop game based on the published Triple S Games rules.

## Play modes
- **Computer:** three heuristic styles; the policy uses only its own identities and publicly visible information.
- **Same device:** private setup and a covered, rotating board between turns.
- **Online friend:** create a seven-character room, share its link or code, and join from another device. Authoritative D1 state, hashed seat tokens, optimistic concurrency, reconnect polling, and filtered board views protect hidden identities.

## Run
Node 22.13 or later. Install with `npm ci`, then `npm run dev`. Open the printed localhost URL at `/game/`. For a production preview, build with `npm run build`, apply the SQL in `drizzle/` to the local DB using Wrangler, and run `npm start`. The Sites starter README describes the migration command. The manifest declares the DB binding in `.openai/hosting.json`.

## Verify
- `node --test tests/engine.test.mjs`
- Start the migrated preview, then `node --test tests/online.test.mjs` (set `GAME_URL` if needed).
- `node --test tests/offline.test.mjs`
- `npm run build`

## PWA and offline
The standalone game lives under `public/game/` and has no framework or external runtime dependency. Its service worker pre-caches every essential game asset, including fonts. After the first successful online load, Computer and Same device work offline. Local games save after every move. Online moves are never queued offline; the client reconnects to authoritative state. Installation requires HTTPS or localhost and a supporting browser. Launch from `/game/`, the PWA's scope. Online rooms need a connection.

## Rule fidelity
Free arrangement in either home rank; hidden enemy identities; capture-the-king victory; no check/checkmate; optional visible kings; back-rank pawn double moves; normal promotion with underpromotion; custom castling at arbitrary files and ranks; en passant that removes the attacking pawn if its target is not a pawn. Illegal moves are prevented by the app; the physical game's retrospective illegal-move penalties do not apply. The computer automatically promotes to queen.

The AI is a lightweight, fog-aware heuristic opponent, not a chess engine with search or a grandmaster strength claim. A player with no legal moves ends a computer game in a draw (a digital deadlock convention beyond the source rules). Online and same-device stalemates can be resolved by resignation; a mutual draw feature is not implemented.

## Online room operations
Rooms have a 48-hour inactivity expiry. Expired rooms cannot be accessed and are physically cleaned up when a subsequent room is created. No account needed at the game layer; hosting access policy may require a sign-in. Seat credentials stay in the browser and are hashed on the server. Clearing storage loses the seat. The user approved public access, so friends can open the published link without an owner-only access restriction. No ratings, chat, matchmaking, or tracking SDKs.

## Credits
Game rules and concept: [Triple S Games / Hidden Identity Chess](https://www.thegamecrafter.com/games/hidden-identity-chess-pieces-only-). This is an independent adaptation, not an official branded release. Original SVG chess icons. Manrope font by Mikhail Sharanda and Mirko Velimirović, under the included SIL Open Font License.
