# Firebase setup — SmartPrint Solutions

This project uses Firebase project **`smartprintsolutions-e3c12`** for Authentication, Firestore (forum + user profiles), and Hosting.

## Prerequisites

1. [Node.js](https://nodejs.org/) installed
2. Access to the [Firebase console](https://console.firebase.google.com/) for project `smartprintsolutions-e3c12`
3. Firebase CLI (installed via `npm install` in this folder)

## One-time console setup

In [Firebase Console → Project settings](https://console.firebase.google.com/project/smartprintsolutions-e3c12/settings/general):

### Authentication

1. Open **Build → Authentication → Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** (add support email if prompted)

### Authorized domains

Under **Authentication → Settings → Authorized domains**, ensure these are listed:

- `localhost` (local dev)
- `smartprintingsolution.online`
- `smartprintsolutions-e3c12.firebaseapp.com`
- `smartprintsolutions-e3c12.web.app`

### Custom domain (Hosting)

1. Open **Build → Hosting**
2. Click **Add custom domain** → enter `smartprintingsolution.online`
3. Add the DNS records Firebase shows at your domain registrar
4. Wait for SSL provisioning (can take up to 24 hours)

### Firestore

1. Open **Build → Firestore Database**
2. If not created yet, create database in **production mode**, then deploy rules from this repo (see below)

**Collections used by the app:**

| Collection | Purpose |
|------------|---------|
| `users/{uid}` | User profiles after register/login |
| `questions/{id}` | Forum posts (title, description, author, authorId, category, date, views, upvotes, answerCount) |
| `questions/{id}/answers/{id}` | Replies to forum posts |

## Install & log in

```bash
cd smartprint-clone
npm install
npx firebase login
```

Verify the linked project:

```bash
npx firebase use
# Should show: smartprintsolutions-e3c12 (default)
```

## Deploy

Deploy everything (hosting + Firestore rules):

```bash
npm run firebase:deploy
```

Or deploy separately:

```bash
npm run firebase:deploy:hosting   # static site + sitemap.xml
npm run firebase:deploy:rules     # Firestore security rules
```

> **Note:** This app does not use Firebase Storage (no file uploads). Storage is not included in deploy config, so you do not need to enable it in the console. If you add uploads later, enable Storage in the console and add a `"storage"` section back to `firebase.json`.

After hosting deploy, the site is available at:

- https://smartprintsolutions-e3c12.web.app
- https://smartprintingsolution.online (after custom domain is connected)

## Local development

```bash
npm start
# http://localhost:3000
```

Auth and forum use the live Firebase backend. `localhost` must be in **Authorized domains** (added by default).

## Config reference

| File | Purpose |
|------|---------|
| `firebase.json` | Hosting, Firestore, Storage deploy config |
| `.firebaserc` | Default project ID |
| `firebase/config.json` | Web app config (also baked into `static/js/main.*.js`) |
| `.env.example` | Env vars if you rebuild the React app from source |
| `firestore.rules` | Database security rules |
| `storage.rules` | Optional; not deployed (Storage unused by this app) |

## Using your own Firebase project

If you want a **new** Firebase project instead of the existing one:

1. Create a project in Firebase Console
2. Register a **Web app** and copy its config
3. Update `.firebaserc`, `firebase/config.json`, and `.env.example`
4. Rebuild the React app with the new `REACT_APP_FIREBASE_*` values (the current bundle has the old project hardcoded)

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Login works locally but not on custom domain | Add domain under Authentication → Authorized domains |
| `permission-denied` on forum | Run `npm run firebase:deploy:rules` |
| Google sign-in popup blocked | Allow popups; check OAuth client in Google Cloud Console |
| `/sitemap.xml` returns HTML | Redeploy hosting; ensure `sitemap.xml` exists at project root |
