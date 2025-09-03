'use strict';

/**
 * process-ts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-ts.process-ts');
