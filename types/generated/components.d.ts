import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkExpWorkExp extends Schema.Component {
  collectionName: 'components_work_exp_work_exps';
  info: {
    displayName: 'Work exp';
  };
  attributes: {
    sno: Attribute.String;
    employer: Attribute.String;
    designation: Attribute.String;
    department: Attribute.String;
    duration_of_employment_in_months: Attribute.String;
    date_of_joining: Attribute.Date;
    mode_of_employment: Attribute.Enumeration<['Regular', 'Contract']>;
  };
}

export interface TestingsTesting extends Schema.Component {
  collectionName: 'components_testings_testings';
  info: {
    displayName: 'testing';
  };
  attributes: {
    sno: Attribute.String;
    description: Attribute.String;
  };
}

export interface TabsTabs extends Schema.Component {
  collectionName: 'components_tabs_tabs';
  info: {
    displayName: 'tabs';
  };
  attributes: {
    key: Attribute.String;
    label: Attribute.String;
    content: Attribute.JSON;
  };
}

export interface TabsHh extends Schema.Component {
  collectionName: 'components_tabs_hhs';
  info: {
    displayName: 'hh';
  };
  attributes: {
    hjuik: Attribute.String;
  };
}

export interface SnoEducationQualification extends Schema.Component {
  collectionName: 'components_sno_education_qualifications';
  info: {
    displayName: 'Education Qualification';
  };
  attributes: {
    sno: Attribute.String;
    degree: Attribute.String;
    year: Attribute.String;
    institute: Attribute.String;
    division: Attribute.String;
    specialization: Attribute.String;
  };
}

export interface ResearchResearch extends Schema.Component {
  collectionName: 'components_research_research';
  info: {
    displayName: 'Research';
  };
  attributes: {
    sno: Attribute.String;
    type: Attribute.String;
    title: Attribute.String;
    publication_year: Attribute.String;
    paper_link: Attribute.String;
    author: Attribute.String;
    publishers: Attribute.String;
  };
}

export interface ProjectsProject extends Schema.Component {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    sno: Attribute.String;
    type: Attribute.String;
    title: Attribute.String;
    duration: Attribute.String;
    amount: Attribute.String;
    year: Attribute.String;
  };
}

export interface PhdsPhd extends Schema.Component {
  collectionName: 'components_phds_phds';
  info: {
    displayName: 'phd';
  };
  attributes: {
    sno: Attribute.String;
    year: Attribute.String;
    thesis_title: Attribute.String;
    university: Attribute.String;
    student: Attribute.String;
  };
}

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

export interface LandingEx extends Schema.Component {
  collectionName: 'components_landing_exes';
  info: {
    displayName: 'ex';
  };
  attributes: {};
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

export interface IntakeCapacityCoursesOffered extends Schema.Component {
  collectionName: 'components_intake_capacity_courses_offereds';
  info: {
    displayName: 'coursesOffered';
  };
  attributes: {
    name: Attribute.String;
    seats: Attribute.String;
  };
}

export interface HeroSectionSlides extends Schema.Component {
  collectionName: 'components_hero_section_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HeroSectionNewsItems extends Schema.Component {
  collectionName: 'components_hero_section_news_items';
  info: {
    displayName: 'newsItems';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HeroSectionAnnouncementItems extends Schema.Component {
  collectionName: 'components_hero_section_announcement_items';
  info: {
    displayName: 'announcementItems';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HeaderUpperHeaderLinks extends Schema.Component {
  collectionName: 'components_header_upper_header_links';
  info: {
    displayName: 'upperHeaderLinks';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
  };
}

export interface HeaderHeaderLinks extends Schema.Component {
  collectionName: 'components_header_header_links';
  info: {
    displayName: 'headerLinks';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
    dropdown: Attribute.Component<'header.dropdown'>;
  };
}

export interface HeaderDropdown extends Schema.Component {
  collectionName: 'components_header_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
  };
}

export interface FooterQuickFindings extends Schema.Component {
  collectionName: 'components_footer_quick_findings';
  info: {
    displayName: 'quickFindings';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
  };
}

export interface FooterMoreInformation extends Schema.Component {
  collectionName: 'components_footer_more_informations';
  info: {
    displayName: 'moreInformation';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
  };
}

export interface FooterImportantLinks extends Schema.Component {
  collectionName: 'components_footer_important_links';
  info: {
    displayName: 'importantLinks';
  };
  attributes: {
    name: Attribute.String;
    links: Attribute.String;
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

export interface FacultySubjects extends Schema.Component {
  collectionName: 'components_faculty_subjects';
  info: {
    displayName: 'subjects';
  };
  attributes: {
    subject: Attribute.String;
    path: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface FacultyFaculty extends Schema.Component {
  collectionName: 'components_faculty_faculties';
  info: {
    displayName: 'faculty';
  };
  attributes: {
    branch: Attribute.String;
    name: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    position: Attribute.String;
    description: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.BigInteger;
    designation: Attribute.String;
    dob: Attribute.Date;
    qualifications: Attribute.JSON;
    tabs: Attribute.Component<'tabs.tabs'>;
  };
}

export interface ExamTimetablePracticaltimetable extends Schema.Component {
  collectionName: 'components_exam_timetable_practicaltimetables';
  info: {
    displayName: 'practicaltimetable';
  };
  attributes: {
    branch: Attribute.String;
    section: Attribute.String;
    doc: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ExamTimetableExamTimetable extends Schema.Component {
  collectionName: 'components_exam_timetable_exam_timetables';
  info: {
    displayName: 'examTimetable';
  };
  attributes: {
    branch: Attribute.String;
    section: Attribute.String;
    doc: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ExamTimetableExamNotice extends Schema.Component {
  collectionName: 'components_exam_timetable_exam_notices';
  info: {
    displayName: 'examNotice';
  };
  attributes: {
    branch: Attribute.String;
    section: Attribute.String;
    doc: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface DocDoc extends Schema.Component {
  collectionName: 'components_doc_docs';
  info: {
    displayName: 'doc';
  };
  attributes: {
    classTimeTable: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    syllabus: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    calender: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    testTimeTable: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    examTimeTable: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work-exp.work-exp': WorkExpWorkExp;
      'testings.testing': TestingsTesting;
      'tabs.tabs': TabsTabs;
      'tabs.hh': TabsHh;
      'sno.education-qualification': SnoEducationQualification;
      'research.research': ResearchResearch;
      'projects.project': ProjectsProject;
      'phds.phd': PhdsPhd;
      'landing.landing': LandingLanding;
      'landing.ex': LandingEx;
      'landing.cousre-name': LandingCousreName;
      'intake-capacity.courses-offered': IntakeCapacityCoursesOffered;
      'hero-section.slides': HeroSectionSlides;
      'hero-section.news-items': HeroSectionNewsItems;
      'hero-section.announcement-items': HeroSectionAnnouncementItems;
      'header.upper-header-links': HeaderUpperHeaderLinks;
      'header.header-links': HeaderHeaderLinks;
      'header.dropdown': HeaderDropdown;
      'footer.quick-findings': FooterQuickFindings;
      'footer.more-information': FooterMoreInformation;
      'footer.important-links': FooterImportantLinks;
      'footer.footer': FooterFooter;
      'faculty.subjects': FacultySubjects;
      'faculty.faculty': FacultyFaculty;
      'exam-timetable.practicaltimetable': ExamTimetablePracticaltimetable;
      'exam-timetable.exam-timetable': ExamTimetableExamTimetable;
      'exam-timetable.exam-notice': ExamTimetableExamNotice;
      'doc.doc': DocDoc;
    }
  }
}
