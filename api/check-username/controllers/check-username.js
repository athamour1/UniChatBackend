'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async checkusername(ctx) {
        const username = ctx.params.id;

        let check = await strapi
            .query('user', 'users-permissions')
            .findOne({ username: username });
        if (check) {
            return ctx.send(
                true
            );
        }
        return ctx.send(
            false
        );
    },
};
