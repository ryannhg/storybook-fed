# Storybook
> UX, Design, and FED - working together!

## Getting Started

1. "I'm on the [UX team](#ux-team)!"

1. "I'm on the [Design team](#design-team)!"

1. "I'm on the [FED team](#fed-team)!"

1. "I'm on the [Backend team](#backend-team)!"

1. "I'm on the [QA team](#qa-team)!"

---

### UX Team
> telling us what the things do.

If you're on the __UX Team__, then you're responsibility is to define the purpose and functionality of the components in our project.

You can contribute by making Markdown files (like `Button.md`) in the `components`, `layouts`, or `pages` folders (the `assets` folder is for FEDs).

Creating markdown files will generate navigation on the side of the Storybook, and that content will be available under the "Notes" tab!

Ready to [try it out](#try-it-out)?

---

### Design Team
> showing us what the things look like.

If you're on the __Design Team__, we need your awesome designs to build things out. With Storybook, you can share your Figma designs in the app. Every `.md` file in the `components`, `layouts`, or `pages` folders are able to have something called "Front Matter". That's where you'll put your Figma URL:

__Before:__

```md
# Buttons
> I love clicking things!

...
```

__After:__

```markdown
---
figma: https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Buttons
---
# Buttons
> I love clicking things!

...
```

After you've provided the URL in the `.md` file, you'll be able to see it in the `Figma` tab for that `component`, `layout` or `page`.

Ready to [try it out](#try-it-out)?

---

### FED Team
> coding what the things be.

If you're on the __FED team__, we need you to bring the `spec.md` and Figma designs to the browser. Building things piece by piece is important, so the backend understands the system, so don't be afraid to break things apart into smaller, reusable pieces.

#### assets

This is where the `.scss` and `.js` goes. It's important that these files are able to be used in the Sitecore project, so there isn't any duplication.

#### components

These are all the UI components that we can see:

- no matter how big they are

- no matter how many components they contain

(the only exception is `pages`, which are just components that we can demo to the client!)

#### layouts

These are invisible pieces of the UI that control how it is structured and the order, alignment, and spacing of components. Grids, lists, and rows are all examples of layouts.

#### pages

The client doesn't necessarily think in terms of building blocks or design systems, they want to see what the actual site will look like.

The `pages` folder is what we can share and show our clients!

Ready to [try it out](#try-it-out)?

---

### Backend Team
> doing the actual things.

If you're on the __Backend team__, it's nice to have the latest stuff all in one location. The UX, design, and FED team will make sure to keep this thing up to date so future devs can reference and rely on it!

#### But the most important maintainer is _you_.

If you fix a bug, or add a feature, be sure to update this project for the next human!

That way, you and the QA team will be able to use this document in a meaningful way for future bugs/features.

#### SCSS and JS

All the assets you need are kept in the `assets` folder.
To build that stuff just run:

```
npm install

npm run build:prod
```

And your assets will be generated for you!

#### HTML

Examples on how the code is used is available in the "Source" tab of storybook, as well as the `components`, `layouts`, and `partials` folders as plain `HTML` snippets.

---

### QA Team
> Working with automated tests.

If you're on the __QA team__, you'll be able to easily see accessibility issues and other tests fail before they reach production.

Now that all this stuff is in one place, we need someone to help keep it that way. Whether you're comparing things for a pilot or launch, or you're making sure a bug fix doesn't impact unexpected parts of the website, this project is designed for you!