'use strict';

/**
 * process-ts controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::process-ts.process-ts');
