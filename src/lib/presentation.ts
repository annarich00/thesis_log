export type SlideSectionKey = 'weekly' | 'literature' | 'special' | 'future';

export const weeklyPresentation = {
  title: 'Weekly Presentations',
  outline: [
    { label: 'Literature Search', href: '/literature-search/' },
    { label: 'Weekly Work', href: '/weekly-work/' },
    { label: 'Future Work', href: '/future-work/' },
  ],
};

export const weeklyWork = {
  title: 'Weekly Work',
  items: [
    'Classes started!',
    'Got started on the agentic AI repo assignment',
    'Searched for more related papers, but have yet to dig deep into all listed',
  ],
};

export const literaturePapers = [
  {
    title: 'Space article',
    href: 'https://spj.science.org/doi/full/10.34133/space.0271',
    notes: 'Relevant space-research framing for the thesis direction.',
  },
  {
    title: 'arXiv preprint',
    href: 'https://arxiv.org/pdf/2606.20394',
    notes: 'Recent work that may inform the agentic AI project scope.',
  },
  {
    title: 'IEEE paper',
    href: 'https://ieeexplore.ieee.org/abstract/document/11635138',
    notes: 'Potentially applicable engineering AI methods or decision support.',
  },
];

export const specialTopics = {
  title: 'Special Topics',
  proposal: 'Zero G class — not as applicable as I had hoped',
};

export const futureWork = {
  title: 'Future Work',
  items: [
    'Getting settled with a class routine',
    'Continue literature search',
    'Narrow down agentic AI project scope to support the thesis goal',
  ],
};
