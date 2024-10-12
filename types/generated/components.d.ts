import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingLanding extends Schema.Component {
  collectionName: 'components_landing_landing_s';
  info: {
    displayName: 'Landing ';
  };
  attributes: {
    CompanyName: Attribute.String;
    Percentage: Attribute.Integer;
  };
}

export interface LandingCousreName extends Schema.Component {
  collectionName: 'components_landing_cousre_names';
  info: {
    displayName: 'CousreName';
  };
  attributes: {
    CourseName: Attribute.Text;
  };
}

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
      'landing.landing': LandingLanding;
      'landing.cousre-name': LandingCousreName;
      'footer.footer': FooterFooter;
    }
  }
}
