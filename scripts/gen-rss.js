const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  try {
    const feed = new RSS({
      title: 'EFAB',
      site_url: 'https://efab.vercel.app/',
      feed_url: 'https://efab.vercel.app/feed.xml'
    })

    const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'), { encoding: 'utf8' })
    const allPosts = []
    await Promise.all(
      posts.map(async (name) => {
        if (name.startsWith('index.')) return

        const content = await fs.readFile(
          path.join(__dirname, '..', 'pages', 'posts', name),
          { encoding: 'utf8' }
        )
        const frontmatter = matter(content)

        allPosts.push({
          title: frontmatter.data.title,
          url: '/posts/' + name.replace(/\.mdx?/, ''),
          date: frontmatter.data.date,
          description: frontmatter.data.description,
          categories: frontmatter.data.tag ? frontmatter.data.tag.split(', ') : [], 
          author: frontmatter.data.author
        })
      })
    )

    allPosts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (isNaN(dateA) || isNaN(dateB)) return 0;
      return dateB - dateA;
    });
    allPosts.forEach((post) => {
        feed.item(post)
    })
    await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }), { encoding: 'utf8' })
    console.log('RSS feed generated successfully');
  } catch (err) {
    console.error(err);
  }
}
