import { defineStore } from 'pinia';

export const useLandingPageStore = defineStore('landingPage', {
  state: () => ({
    welcome: {
      shortTitle: 'Apply Now!',
      title: 'A Service Provider Of',
      highlightedTitle: 'Highly Trained',
      remainingTitle: 'and Superior Workforce',
      description:
        'It is built to help Filipinos find decent job while giving our customer the benefits of Control, Compliance, Efficiency, and Cost Savings.',
    },
    qualifications: [
      {
        id: 1,
        name: 'Female or Male',
      },
      {
        id: 2,
        name: 'Single or Married',
      },
      {
        id: 3,
        name: 'At least HS/JHS/SHS/ALS Graduate',
      },
      {
        id: 4,
        name: 'With or Without Experience',
      },
      {
        id: 5,
        name: 'Flexible and Hardworking',
      },
    ],
    benefits: [
      {
        id: 1,
        name: 'HMO',
      },
      {
        id: 2,
        name: 'Mandatory Benefits',
      },
      {
        id: 3,
        name: 'Probationary Employment',
      },
      {
        id: 4,
        name: 'Service Incentive Leave',
      },
      {
        id: 5,
        name: 'Life and Accident Insurance',
      },
    ],
    companyAssignments: [
      {
        id: 1,
        name: 'Science Park 1 Diezmo Cabuyao Laguna',
      },
      {
        id: 2,
        name: 'Science Park 2 Real Calamba Laguna',
      },
      {
        id: 3,
        name: 'Laguna Technopark Biñan Laguna',
      },
      {
        id: 4,
        name: 'Gen. Trias Cavite',
      },
      {
        id: 5,
        name: 'LIMA Batangas',
      },
    ],
    shortIntroduction: {
      title: 'We at Fully Advanced Manpower Solutions, Inc.',
      description:
        'accepts all and temporary staffing requirements that may required by existing clients and prospective business associates. Were partners with countless major organisations around the globe',
    },
    visitOffice: {
      title: 'For those',
      highlightedTitle: 'interested applicants',
      remainingTitle: 'visit our office near you.',
      offices: [
        {
          id: 1,
          name: '📍2/F JEC Bldg. National Highway, Brgy. Banay-banay, Cabuyao City, Laguna.',
          landmark:
            'Landmark: In front of Banay-banay Brgy Hall. near Super 8.',
        },
        {
          id: 2,
          name: '📍3rd floor Piazza de Juan Bldg. Crisanto M. Delos Reyes Ave. Brgy. Manggahan, General Trias Cavite',
          landmark: 'Landmark : At the top of Bon Appetea.',
        },
        {
          id: 3,
          name: '📍J&M Building, Brgy. Santiago, Malvar, Batangas.',
          landmark: 'Landmark : Near the Jollibee.',
        },
      ],
    },
    currentOpenings: {
      title: 'Here are all the current job positions.',
      positions: [
        {
          id: 1,
          title: 'HR Supervisor',
          description: 'Full-Time Job.',
        },
        {
          id: 2,
          title: 'Welder',
          description: 'Full-Time Job.',
        },
        {
          id: 3,
          title: 'Driver (Restrictions: 1,2,3)',
          description: 'Full-Time Job.',
        },
      ],
    },
  }),
});
