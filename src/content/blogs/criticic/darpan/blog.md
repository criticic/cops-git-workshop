---
title: "How to Get Started with Git (& this blog)"
publishDate: "2024-09-25"
---

You may be wondering how to get started with Git, and this blog is a great place to start! Here's how to get started:

1. Go to the [GitHub repository](https://github.com/criticic/cops-git-workshop) for this blog. Fork the repository to your own account by clicking the "Fork" button in the top right corner.

2. Clone your fork of the repository to your local machine, using the following command (if you have SSH set up):

   ```sh
   git clone git@github.com:criticic/cops-git-workshop.git
   ```

   or, if you don't have SSH set up:

   ```sh
   git clone https://github.com/criticic/cops-git-workshop.git
   ```

3. Navigate to the repository:

   ```sh
   cd cops-git-workshop
   ```

4. Create a new branch for your changes:

   ```sh
   git checkout -b my-first-branch
   ```

5. Make a folder in the `src/content/blogs` directory with your GitHub username (e.g. `src/content/blogs/your-username`).

6. Create a new Markdown file in that folder with the title of your blog post (e.g. `src/content/blogs/your-username/my-first-blog.md`).

7. You can use the following template for your blog post:

   ```md
   ---
   title: "My First Blog"
   publishDate: "2024-09-26"
   ---

   This is my first blog post! I'm excited to share my thoughts with the world.
   ```

   Feel free to change the title, content and publish date to whatever you'd like!

8. Add, commit and push your changes:

   ```sh
   git add .
   git commit -m "Add my first blog post"
   git push origin my-first-branch
   ```

9. Create a pull request on Main GitHub Page (not your fork) to merge your changes into the main repository.

10. And wait for your changes to be reviewed and merged!

That's it! And in ten simple steps, you've made your first contribution to this blog using Git. You can share your blogs with your friends and family, and show off your new Git skills. Happy contributing! 🚀

PS: If you have knowledge of Web Development, you can try to contribute to the website as well. If not don't fret, we will have many more workshops in the future. Stay tuned! 🎉
