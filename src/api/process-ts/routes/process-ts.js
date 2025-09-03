'use strict';

/**
 * process-ts router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::process-ts.process-ts');
