import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    icon: 'cube';
  };
  attributes: {
    links: Attribute.JSON & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.footer': FooterFooter;
    }
  }
}
