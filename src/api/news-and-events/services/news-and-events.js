'use strict';

/**
 * news-and-events service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-events.news-and-events');
