import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {type: 'autogenerated', dirName: 'docs'}
  ],
  apiSidebar: [
    {type: 'autogenerated', dirName: 'api'}
  ],
  videosSidebar: [
    'videos/intro',
    {
      type: 'category',
      label: 'How to ...',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'videos/signup',
        'videos/claim',
        'videos/fill-form',
        'videos/submit-votes',
        'videos/admin'
      ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
