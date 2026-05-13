# Firebase Security Spec

## 1. Data Invariants
- `articles`: Only admins can create, update, or delete articles. Anyone can read them.
- `reflections`: Authenticated users can create reflections. Deletions/updates are restricted to the owner (or we can just make them immutable for now). Anyone can read them.
- `admins`: Defines admin users. Only readable by auth users (to check admin status), or maybe restrict read to self and admin. Immutable by client.

## 2. The "Dirty Dozen" Payloads
1. Create Article without Admin role.
2. Create Article with an arbitrary authorId instead of own uid.
3. Update someone else's Article.
4. Pass a non-string title to Article.
5. Create Reflection without being signed in.
6. Create Reflection with an authorId not matching uid.
7. Create Reflection with oversized content (Denial of Wallet).
8. Overwrite another user's Reflection.
9. Bypass `createdAt` constraint (pass future timestamp).
10. Update `isAdmin` to true in `/admins/{userId}`.
11. Query `articles` list when logged out (Wait, articles are public, so allow read).
12. Inject JSON instead of a Map.

## 3. The Test Runner
Tests will assert these payloads fail.
