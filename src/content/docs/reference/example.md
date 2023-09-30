---
title: Installation guide 
description: Library installation steps
---

To install the library in a web project it is necessary to paste this tag in your web project.

```html

<script src="https://cdn.jsdelivr.net/gh/EyeeAssist/library@main/public/bundle.js"></script>

```
## Visible content to screen reader

To make the content visible to the reader, it must be encapsulated in an article tag.

Example: 
```html
<article>
    <h1> Header </h1>
    <p> Text </p>
</article>

```

## Visible links to screen reader

To make the links visible to the reader, it must tagged with 'text_reader_link' 

```html
<a class='text_reader_link'></a>
```
## Visible images to  screen reader

To make an image visible to the screen reader and generate a description, it should be labeled as follows

```html
<img alt="" src="/image.jpg"></img>
```

## Visible embeded to screen reader

To make an embedded video visible for the reader, it must be inserted with an iframe with youtube links.

```html
<iframe 
    width="560" height="315" 
    src="https://www.youtube.com/embed/fOW8Y09GVek?si=F9ZQ5BLgLj1V0sXs" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
```

By default the tools will be enabled for all users. 
