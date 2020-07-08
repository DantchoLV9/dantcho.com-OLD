---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

## Hi,

First of all this is my first post in which I will try to provide some useful information. It would be great if you rated it using the link at the end Let's start!

## About VS Code

VS Code or Visual Studio Code is a simple source code editor. It is available for Windows, Linux and macOS.

What I like about it is it's simplicity. It is quite like Atom, but it also provides the ability for extensions to be installed which is a big plus.

Below are some instruction on how to get started with VS Code if you are a complete beginner.

## Installation

Installation should be quite easy on all types of systems. VS Code is available [here](https://code.visualstudio.com/). Insiders edition of VS Code is also available.

## Some Code (Test)

```javascript{numberLines: true}
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const pageTitle = "All posts"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={pageTitle} />
      <h1 className={styles.blogHeading}>{pageTitle}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article className={styles.postItem} key={node.fields.slug}>
            <h2 className={styles.postTitle}>{title}</h2>
            <Link className={styles.postLink} to={node.fields.slug}>
              Read
            </Link>
          </article>
        )
      })}
    </Layout>
  )
}
```

## Use

To create a project click **File** and then **Add Folder To Workspace...**  
Choose an existing folder or create a new one. Click **Add**.  
The folder should now appear in the file explorer on the left side of your screen.  
You can now manage the files in that folder through VS Code.

To create a new file, hover over the file explorer on the left. Some buttons will apper on the top which can be used to create a new file, create a new folder, refresh the explorer or close all the expanded directories.

Clicking a file twice opens it in the editor. To save it press **Ctrl + S**. You can open multiple files at the same time. All the opened files appear above the text editor. You can switch to different files from there or close a file.

These are the basics of VS Code. You are ready to start using it. Keep in mind that there are a lot more features that VS Code offers. In the future I may post another tutorial for more VS Code features.

## Customising Looks

VS Code can be customised with different themes and icon packs. The icon packs are used for the file explorer. Below are the theme and icon pack I use.

To install them open VS Code and go to the **Extensions** tab. You can do that my pressing **Ctrl + Shift + X**. Then just search for an extension, a theme or an icon pack.

The theme I use is called [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme).

The icons pack which I use is called [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme).

I also use a custom font which I think looks better. It also has support for ligatures.

You can download the font from this link.
[JetBrains Mono](https://www.jetbrains.com/lp/mono/)

To install the font just extract the archive. Then select all the files, right click any of them and click **Install**.

After that open VS Code (You may need to restart it if it was already open) and go to **Settings**. The shortcut for the settings is **Ctrl + ,**. Go to **Text Editor** and then **Font**.

You should now see an input field with a label **Font Family**. Add the text below before all the other fonts in the field.

`'JetBrains Mono',`

You should now know how to install a theme, an icon pack and a custom font in VS Code.

## Installing Extensions

There are all kinds of extensions for VS Code. Varying from visual tweaks to added functionality like improved git repo insights inside the editor. Since VS Code can be used for so much different purposes I cannot say what extensions will fit your exact case, but here are the ones I think everyone should have.

The installation for most extensions is pretty simple. Just search for them in the **Extensions** tab and use the **Install** button.

---

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) makes it really easy to distinguish different code blocks. It colorizes the bracket pairs and draws a line between them to indicate the code block they surround. No additional setup is required for this extensions.

---

[Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) adds additional git repo insights inside the editor. It can be quite useful if you are working on a project along with other people. No additional setup is required for this extensions.

---

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formats code on file save. It is quite useful for example if you paste some code or if you have a really long line of code. Occasionally I have seen some unexpected behavior which messes up the format of the code, but in general its pretty good.

This extension may require some additional setup to start working.

---

If you are a web developer also check out [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). The name pretty much says it all. You may know how frustrating it may be to just keep hitting **F5** while working on a front end. This extensions reloads the page when you save so you don't have to.

It is quite a useful one although at the moment it looks like it has been abandoned by its creator. No additional setup is required for this extensions.

---

I just noticed how long this post became. Sorry for the long read and thank you for reading!

I would really appreciate it if you took the time to rate this post [here](https://forms.gle/7tiaBtfQyFMuAfuZ7)!
