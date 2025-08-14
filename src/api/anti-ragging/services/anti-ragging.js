'use strict';

/**
 * anti-ragging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::anti-ragging.anti-ragging');
