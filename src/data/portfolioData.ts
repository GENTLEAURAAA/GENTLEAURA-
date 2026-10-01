export interface ManuscriptSection {
  id: string;
  tabLabel: string;
  frameworkUsed: string;
  blocks: {
    stageTag?: string;
    heading: string;
    body: string[];
  }[];
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  category: string;
  metadataLine: string;
  summary: string;
  deliverables: string[];
  manuscriptSections: ManuscriptSection[];
}

export interface ServiceOffering {
  number: string;
  title: string;
  focusLine: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'skincare-brand-sample',
    index: '01',
    title: 'Skincare Brand [Sample]',
    category: 'Copywriting & Email Marketing',
    metadataLine: 'Copywriting Sample · Fictional Skincare Brand · AIDA & PAS Frameworks',
    summary:
      'Sample copywriting piece written for a fictional skincare brand (Solstice Botanicals). Built with the PAS and AIDA frameworks to turn product benefits into clear copy people act on.',
    deliverables: [
      'Product landing page copy (PAS framework)',
      'Email marketing welcome & launch sequence (AIDA framework)',
      'Customer chat support reply templates'
    ],
    manuscriptSections: [
      {
        id: 'skincare-landing-pas',
        tabLabel: 'Landing Page Copy (PAS)',
        frameworkUsed: 'PAS Framework (Problem · Agitate · Solution)',
        blocks: [
          {
            stageTag: 'Headline',
            heading: 'Your Skin Isn’t “Difficult.” It’s Exhausted.',
            body: [
              'A simple 2-step daily skincare ritual made for skin that feels tight, dry, or irritated after washing. Zero harsh fragrance. Calm, hydrated skin in 14 days.'
            ]
          },
          {
            stageTag: 'Problem',
            heading: 'When More Products Create Less Glow',
            body: [
              'You bought the brightening serum, the exfoliating toner, and the foaming cleanser everyone recommended. Yet every morning in the mirror, the tightness around your cheeks and the redness along your jawline are still there.'
            ]
          },
          {
            stageTag: 'Agitate',
            heading: 'Why Layering More Actives Makes It Worse',
            body: [
              'Every time you layer another strong acid onto a tired moisture barrier, moisture escapes faster overnight and irritation sinks deeper. Buying another random lotion won’t fix a depleted skin barrier—it only adds another half-empty bottle to your shelf.'
            ]
          },
          {
            stageTag: 'Solution',
            heading: 'Restore Your Calm with Solstice Daily Barrier Serum',
            body: [
              'Solstice replaces complicated 9-step routines with soothing oat extract and skin-identical ceramides that lock in hydration for 24 hours.',
              'Call to Action: Start Your 14-Day Skin Reset Today.'
            ]
          }
        ]
      },
      {
        id: 'skincare-email-aida',
        tabLabel: 'Email Marketing Sample (AIDA)',
        frameworkUsed: 'AIDA Framework (Attention · Interest · Desire · Action)',
        blocks: [
          {
            stageTag: 'Attention — Subject Line',
            heading: 'Subject: Why your moisturizer stings (and how to fix it)',
            body: [
              'If your face feels tight twenty minutes after washing it, your moisturizer isn’t failing because your skin is “too dry.” It’s failing because your moisture barrier needs repair first.'
            ]
          },
          {
            stageTag: 'Interest — The Simple Reason',
            heading: 'Think of Your Skin Like a Brick Wall',
            body: [
              'Your skin cells are the bricks, and natural lipids are the mortar holding them together. Harsh cleansers wash away that mortar, causing regular lotions to evaporate within an hour.'
            ]
          },
          {
            stageTag: 'Desire — The Result',
            heading: 'What Happens When You Protect the Barrier First',
            body: [
              '• Day 1: Post-wash tightness and redness calm down immediately.\n• Day 7: Dry, flaky patches smooth out naturally.\n• Day 14: Soft, healthy-looking skin using just two drops morning and night.'
            ]
          },
          {
            stageTag: 'Action — Next Step',
            heading: 'Try Solstice Risk-Free for 30 Days',
            body: [
              'Click below to order your 30ml Solstice Barrier Serum today with free delivery.',
              '[Order My 14-Day Skin Reset →]'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ebooks-weight-portfolio',
    index: '02',
    title: 'Healthy Weight Gain & Weight Loss eBooks [Sample]',
    category: 'Copywriting & eBook Writing',
    metadataLine: 'eBook Samples · Healthy Weight Gain & Weight Loss · Portfolio Pieces',
    summary:
      'A healthy weight gain eBook and a weight loss eBook written as portfolio pieces. Shows clear, well-researched writing and persuasive AIDA/PAS sales copy for two different audiences.',
    deliverables: [
      'Healthy Weight Gain eBook sample (The Steady Surplus)',
      'Healthy Weight Loss eBook sample (The Sustainable Deficit)',
      'eBook sales page & email marketing promotion copy'
    ],
    manuscriptSections: [
      {
        id: 'ebook-weight-gain',
        tabLabel: 'Healthy Weight Gain eBook',
        frameworkUsed: 'PAS Framework + Clear Step-by-Step Guide',
        blocks: [
          {
            stageTag: 'Book 1 Introduction (PAS)',
            heading: 'The Steady Surplus: A Practical Guide to Healthy Weight Gain',
            body: [
              'Problem: Whenever you mention trying to gain weight, people tell you to “just eat more junk food.” They don’t understand how hard it is when you have a fast metabolism or low appetite and big meals leave you feeling overly full.',
              'Agitate: Forcing down sugary, processed snacks doesn’t build healthy weight or steady energy—it leaves you sluggish and ruins your appetite for your next real meal.',
              'Solution: This guide shows you how to add 500 clean, nutrient-dense calories a day using simple everyday food swaps without stuffing yourself.'
            ]
          },
          {
            stageTag: 'Sample Chapter Excerpt',
            heading: '3 Easy Ways to Add Calories Without Eating Bigger Plates',
            body: [
              'When you get full quickly, plate volume is the challenge. Instead of cooking a second plate of food, upgrade the meals you already eat:\n\n1. Cook rice or oats in coconut milk or broth instead of plain water (+140 kcal).\n2. Stir two tablespoons of peanut butter, almond butter, or olive oil into warm meals (+190 kcal).\n3. Drink a blended oat, banana, and milk smoothie between lunch and dinner (+450 kcal) so you nourish your body without feeling heavy.'
            ]
          }
        ]
      },
      {
        id: 'ebook-weight-loss',
        tabLabel: 'Healthy Weight Loss eBook',
        frameworkUsed: 'AIDA Framework + Practical Habit Guide',
        blocks: [
          {
            stageTag: 'Book 2 Introduction (AIDA)',
            heading: 'The Sustainable Deficit: Healthy Weight Loss Without Starving',
            body: [
              'Attention: Most strict crash diets fail within two weeks—not because you lack discipline, but because starving yourself triggers intense evening hunger.',
              'Interest: What if you could lose weight steadily while eating satisfying, everyday meals that keep you full?',
              'Desire: Inside this guide, you will learn the simple Protein-and-Fiber Plate Method that stops late-night cravings and fits right into your normal family meals.',
              'Action: Read the Chapter 1 summary below to build your first 7-day meal routine.'
            ]
          },
          {
            stageTag: 'Sample Chapter Excerpt',
            heading: 'Focus on What You Add Before What You Cut',
            body: [
              'Most diet books start with a long list of foods you aren’t allowed to eat. Within days, your energy drops and cravings take over.\n\nInstead of cutting everything out on day one, start by anchoring breakfast and lunch with a palm-sized portion of protein and fiber-rich vegetables or whole grains. When your body is properly fuelled early in the day, staying consistent becomes natural.'
            ]
          }
        ]
      }
    ]
  }
];

export const CORE_SERVICES: ServiceOffering[] = [
  {
    number: '01',
    title: 'Copywriting',
    focusLine: 'AIDA & PAS Frameworks · Landing Pages · eBooks · Product Copy',
    description:
      'Clear, persuasive copywriting using proven frameworks like AIDA and PAS to turn what you sell into copy people act on.',
    deliverables: [
      'Website & landing page copy',
      'eBook writing & digital guides',
      'Product descriptions & sales copy'
    ]
  },
  {
    number: '02',
    title: 'Email Marketing',
    focusLine: 'Welcome Flows · Newsletters · Launch Sequences · Retention',
    description:
      'Engaging emails that people actually open, read, and click—helping you nurture subscribers and turn them into loyal customers.',
    deliverables: [
      'Welcome email sequences for new subscribers',
      'Weekly brand newsletters & broadcast campaigns',
      'Product launch & abandoned cart emails'
    ]
  },
  {
    number: '03',
    title: 'Customer & Chat Support',
    focusLine: 'Live Chat · Email Support · Order Inquiries · Follow-Through',
    description:
      'Friendly, patient, and clear customer support across live chat, email, and social DMs so every customer feels heard and helped quickly.',
    deliverables: [
      'Real-time live chat & helpdesk ticket replies',
      'Order tracking, FAQs & issue resolution',
      'Dependable follow-up until every question is solved'
    ]
  },
  {
    number: '04',
    title: 'Virtual Assistance',
    focusLine: 'Inbox Management · Scheduling · Admin Tasks · Organization',
    description:
      'Trained virtual assistance with dependable follow-through. I take care of your daily admin tasks so you can focus on growing your business.',
    deliverables: [
      'Email inbox organization & drafting replies',
      'Calendar scheduling, data entry & research',
      'Client follow-ups & document preparation'
    ]
  },
  {
    number: '05',
    title: 'Social Media Management',
    focusLine: 'Content Planning · Captions · Scheduling · Community Replies',
    description:
      'Consistent social media posts and clear captions that keep your brand active, visible, and connected with your audience.',
    deliverables: [
      'Monthly content calendars & post scheduling',
      'Engaging social media captions & hooks',
      'Replying to comments & managing DMs'
    ]
  }
];
