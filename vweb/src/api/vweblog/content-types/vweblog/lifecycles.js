const slugify = require('slugify');

function calculateReadTime(content) {
  if (!content) return 0;

  // If content is an object (Rich Text), convert it to string
  let text = typeof content === 'string' ? content : JSON.stringify(content);

  // Remove HTML tags if any
  text = text.replace(/<[^>]+>/g, '');

  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.title && !data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }

    if (data.content) {
      data.readTime = parseInt(calculateReadTime(data.content), 10);
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.title && !data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }

    if (data.content) {
      data.readTime = parseInt(calculateReadTime(data.content), 10);
    }
  },
};
