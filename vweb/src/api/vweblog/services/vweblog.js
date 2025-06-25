'use strict';

/**
 * vweblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vweblog.vweblog');
