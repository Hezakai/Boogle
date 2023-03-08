# Startup

## Folder Structure

```
.
└── MERN-Homework/
    ├── client/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── LoginForm.js
    │   │   │   ├── Navbar.js
    │   │   │   └── SignupForm.js
    │   │   ├── pages/
    │   │   │   ├── SavedBooks.js
    │   │   │   └── SearchBooks.js
    │   │   ├── utils/
    │   │   │   ├── auth.js
    │   │   │   ├── localStorage.js
    │   │   │   ├── mutation.js
    │   │   │   └── queries.js
    │   │   ├── App.js
    │   │   ├── index.css
    │   │   └── index.js
    │   ├── .gitignore
    │   ├── package.json
    │   └── README.md
    ├── server/
    │   ├── config/
    │   │   └── connection.js
    │   ├── models/
    │   │   ├── Book.js
    │   │   ├── index.js
    │   │   └── User.js
    │   ├── schemas/
    │   │   ├── index.js
    │   │   ├── resolvers.js
    │   │   └── typeDefs.js
    │   ├── utils/
    │   │   └── auth.js
    │   ├── package.json
    │   └── server.js
    └── package.json
```

## TODO's

Server side
- `/server/server.js`
- `/server/utils/auth.js`
- delete `routes` and `controllers`: replace with `schemas`
- `/server/schemas` all files

Client Side
- `/client/src/app.js`
- `/client/src/components/LoginForm.js`
- note you will have to do similar changes to all files that call an api, for example SignupForm
- `/client/src/utils` mutations and queries folder