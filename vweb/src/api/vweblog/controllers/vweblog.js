'use strict';

/**
 * vweblog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vweblog.vweblog', ({ strapi }) => ({
  // Custom controller action
  async incrementViews(ctx) {
    const { slug } = ctx.params;

    // Find the blog post by slug
    const posts = await strapi.entityService.findMany('api::vweblog.vweblog', {
      filters: { slug },
    });

    const post = posts?.[0];
    if (!post) {
      return ctx.notFound('Post not found');
    }

    // Update the views field
    const updatedPost = await strapi.entityService.update('api::vweblog.vweblog', post.id, {
      data: {
        views: (post.views || 0) + 1,
      },
    });

    ctx.send(updatedPost);
  },
}));
