# Angular Intro Task

## 📌 Description

Its "Film Collection" — a small movie catalog application using mock data. The goal is to get hands-on experience with core Angular concepts: components, routing, directives, pipes, and signals.
---

## 🚀 Features

- Angular application initialized with Angular CLI
- Basic project structure
- Components creation
- TypeScript usage
- Simple UI rendering

---

## 🛠 Tech Stack

- Angular 20+
- Standalone components (no NgModules)
- No RxJS — only Signals for reactivity
- TypeScript
- HTML5
- CSS / SCSS

---

## 📂 Project Structure

## ⚙️ Getting Started

### 1. Clone repository
```bash
git clone https://github.com/vladaworkflow-ops/film-collection.git
cd <repo-name>
```

##  Install dependencies

```bash
npm install
```

## Run project

```bash
ng serve
```
## Open in browser

```bash
http://localhost:4200
```

## Completed Technical Requirements

- Renders film list
  -  Film card accepts data via input()
  -  Film list is rendered using @for
- Add routes
  - At least 2 routes: film list, film details
  - Navigation via routerLink
  - Unknown route handling (wildcard)
- Applied to the search field
  - Search by title works
  - Search string — signal()