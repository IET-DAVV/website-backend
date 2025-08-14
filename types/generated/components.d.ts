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

export interface GuidlinesSection extends Schema.Component {
  collectionName: 'components_guidlines_sections';
  info: {
    displayName: 'section';
  };
  attributes: {};
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

export interface EmailContact extends Schema.Component {
  collectionName: 'components_email_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Attribute.String;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Email: Attribute.String;
    Phone: Attribute.BigInteger;
  };
}

export interface ContactContactOffice extends Schema.Component {
  collectionName: 'components_contact_contact_offices';
  info: {
    displayName: 'Contact-Office';
  };
  attributes: {
    Email: Attribute.String;
    Phone: Attribute.BigInteger;
    Mobile: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing.landing': LandingLanding;
      'landing.cousre-name': LandingCousreName;
      'guidlines.section': GuidlinesSection;
      'footer.footer': FooterFooter;
      'email.contact': EmailContact;
      'contact.contact': ContactContact;
      'contact.contact-office': ContactContactOffice;
    }
  }
}
