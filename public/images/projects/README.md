# Project Images

Project images live here. Each project gets its own directory named after its
`slug` from `src/content/projects.ts`.

## Directory Structure

```
public/images/projects/
└── {slug}/
    ├── cover.png
    ├── 1/
    │   ├── screenshot-1.png
    │   └── screenshot-2.png
    ├── 2/
    │   └── diagram.png
    └── 3/
        └── results.png
```
### Cover Image

Each project directory must contain a cover image at its root named `cover.png`.

### Section Directories

Numbered subdirectories (`1/`, `2/`, `3/`, …) hold images associated with each
page section on the project detail page.

Note that:
- A project can have any number of
sections
    - Images are optional
- Directories must be numbered in increasing order corresponding to a section you want to attach images to

All images inside a given section directory will be rendered under that section's content on the corresponding Project page.

## Adding a New Project

1. Create a directory using the project's slug:

```
public/images/projects/my-project/
```

2. Add a cover image at the root:

```
public/images/projects/my-project/cover.png
```

3. Add a numbered directory for each detail page section that needs images:

```
public/images/projects/my-project/1/
public/images/projects/my-project/2/
```

4. Reference the cover image path in `src/content/projects.ts`:

```ts
{
    slug: "my-project",
    image: "/images/projects/my-project/cover.png",
    // ...
}
```

## Recommended Formats

- **Format:** PNG or WebP
- **Cover aspect ratio:** 16:10 landscape (works best for project cards)
- **Cover dimensions:** at least 1200×750px
- **File size:** 
    - < 500KB/image 
    - compress before committing
