// 'use strict';

// /**
//  * vweblog router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::vweblog.vweblog');


'use strict';

module.exports = {
  routes: [
    // Custom route to increment views
    {
      method: 'PUT',
      path: '/vweblogs/:slug/increment-views',
      handler: 'vweblog.incrementViews',
      config: {
        auth: false, // 👈 Make public, or change this if you need auth
      },
    },

    // Default core routes
    {
      method: 'GET',
      path: '/vweblogs',
      handler: 'vweblog.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/vweblogs/:id',
      handler: 'vweblog.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/vweblogs',
      handler: 'vweblog.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/vweblogs/:id',
      handler: 'vweblog.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/vweblogs/:id',
      handler: 'vweblog.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
