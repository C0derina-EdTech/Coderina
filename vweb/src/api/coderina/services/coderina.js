'use strict';

/**
 * coderina service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coderina.coderina');
