import type { Course } from '@/lib/types';

/**
 * AQA GCSE Biology 8461 — Unit 4.1 Cell Biology.
 *
 * All prose below is original summary writing based on publicly documented
 * specification requirements. It is NOT copied from AQA materials.
 *
 * Before editing: confirm the current specification version and update
 * `specVersion` and `checkedDate`. A stale date is worse than no date.
 */
export const course: Course = {
  board: 'aqa',
  boardName: 'AQA',
  subject: 'biology',
  subjectName: 'Biology',
  specCode: '8461',
  specTitle: 'GCSE Biology',
  specVersion: '1.2',
  checkedDate: '2026-10-20',
  tiers: ['foundation', 'higher'],

  units: [
    { code: '4.1', title: 'Cell biology', published: true },
    { code: '4.2', title: 'Organisation', published: false },
    { code: '4.3', title: 'Infection and response', published: false },
    { code: '4.4', title: 'Bioenergetics', published: false },
    { code: '4.5', title: 'Homeostasis and response', published: false },
    { code: '4.6', title: 'Inheritance, variation and evolution', published: false },
    { code: '4.7', title: 'Ecology', published: false },
    { code: '4.8', title: 'Key ideas', published: false },
  ],

  topics: [
    // ---------------------------------------------------------------------
    // 4.1.1 Cell structure
    // ---------------------------------------------------------------------
    {
      id: 'aqa-8461-4-1-1',
      slug: 'cell-structure',
      unit: '4.1',
      title: 'Cell structure',
      specRef: '4.1.1',
      tiers: ['foundation', 'higher'],
      summary:
        'The differences between eukaryotic and prokaryotic cells, the sub-cellular structures you need to name, and how microscopes let us see them.',
      sections: [
        {
          heading: 'Eukaryotic cells',
          body: [
            'Eukaryotic cells are found in animals, plants and fungi. They are typically 10–100 µm across and contain their genetic material enclosed in a nucleus.',
            'You need to know the function of each sub-cellular structure, not just its name.',
          ],
        },
        {
          heading: 'Sub-cellular structures and their jobs',
          body: [
            'Nucleus — contains the cell\'s genetic material arranged as chromosomes, and controls the activities of the cell.',
            'Cytoplasm — a jelly-like substance where most chemical reactions take place.',
            'Cell membrane — a partially permeable barrier that controls what enters and leaves the cell.',
            'Mitochondria — where aerobic respiration takes place, releasing energy. Cells that need a lot of energy (muscle cells, sperm cells) have many of them.',
            'Ribosomes — the site of protein synthesis.',
            'Plant cells also have: a rigid cell wall made of cellulose for support; a permanent vacuole filled with cell sap; and chloroplasts containing chlorophyll, where photosynthesis happens.',
          ],
        },
        {
          heading: 'Prokaryotic cells',
          body: [
            'Bacteria are prokaryotic. They are much smaller than eukaryotic cells — typically 0.2–2 µm — and their genetic material is not enclosed in a nucleus.',
            'A bacterial cell has: cytoplasm, a cell membrane, a cell wall, a single circular strand of DNA, and one or more small rings of DNA called plasmids.',
            'Plasmids are the reason bacteria are used in genetic engineering — they can be used to carry a gene into a cell.',
          ],
          callout: {
            type: 'exam-tip',
            text: 'A common 2-mark question asks for differences between prokaryotic and eukaryotic cells. The two marks are usually: prokaryotes have no nucleus, and prokaryotes are much smaller. Naming plasmids alone will not earn the size mark.',
          },
        },
        {
          heading: 'Orders of magnitude',
          body: [
            '1 mm = 1000 µm (micrometres). 1 µm = 1000 nm (nanometres).',
            'A typical animal cell is around 20 µm. A bacterium is around 1 µm. A virus is around 20 nm — about 1000 times smaller than an animal cell.',
            'You may be asked to compare sizes across orders of magnitude. Show the calculation, not just the answer.',
          ],
        },
        {
          heading: 'Microscopes',
          body: [
            'Light microscopes use light and lenses. They can magnify up to about ×2000 and have a resolution of around 200 nm. They let you see individual cells and some larger sub-cellular structures such as nuclei and chloroplasts.',
            'Electron microscopes use electrons. They have much higher magnification and resolution (around 0.2 nm), which reveals the internal structure of cells — mitochondria, ribosomes and plasmids become visible.',
            'Resolution is the ability to distinguish between two separate points. Higher resolution means more detail, not just a bigger image — this distinction is frequently examined.',
          ],
          callout: {
            type: 'exam-tip',
            text: 'Magnification and resolution are not the same thing. An image can be highly magnified but blurry if resolution is poor. If a question asks why the electron microscope revealed more detail, the answer is resolution, not magnification.',
          },
        },
        {
          heading: 'Calculating magnification',
          body: [
            'magnification = image size ÷ real size',
            'Rearrange as needed: real size = image size ÷ magnification. Keep units consistent — convert everything to the same unit before dividing, and state the unit in your answer.',
            'Example: an image of a cell is 40 mm across at ×2000 magnification. Real size = 40 mm ÷ 2000 = 0.02 mm = 20 µm.',
          ],
        },
      ],
      requiredPractical:
        'Use a light microscope to observe, draw and label a selection of plant and animal cells. You must be able to describe how to prepare a slide (including using a stain such as iodine for onion cells), how to focus using the coarse then fine adjustment, and why a coverslip is lowered at an angle (to avoid air bubbles).',
      keyTerms: [
        { term: 'Eukaryotic cell', definition: 'A cell with genetic material enclosed in a nucleus. Found in animals, plants and fungi.' },
        { term: 'Prokaryotic cell', definition: 'A cell with no nucleus; genetic material is a single circular strand of DNA plus plasmids. Bacteria are prokaryotes.' },
        { term: 'Nucleus', definition: 'Organelle containing chromosomes; controls the activities of the cell.' },
        { term: 'Mitochondria', definition: 'Site of aerobic respiration, releasing energy.' },
        { term: 'Ribosomes', definition: 'Site of protein synthesis.' },
        { term: 'Plasmid', definition: 'A small ring of DNA found in bacteria, separate from the main chromosome.' },
        { term: 'Magnification', definition: 'How many times larger an image is than the object: image size ÷ real size.' },
        { term: 'Resolution', definition: 'The ability to distinguish two separate points. Higher resolution reveals more detail.' },
        { term: 'Cell wall (plant)', definition: 'Rigid layer made of cellulose, giving the cell support.' },
        { term: 'Permanent vacuole', definition: 'Plant cell organelle filled with cell sap; helps keep the cell rigid.' },
      ],
      examQuestions: [
        {
          question:
            'A student views a cell under a microscope. The image of the cell is 30 mm wide and the actual cell is 15 µm wide. Calculate the magnification. Give your answer to 2 significant figures.',
          marks: 3,
          markScheme: [
            'Converts units so both are the same: 30 mm = 30 000 µm (1 mark)',
            'Uses magnification = image size ÷ real size: 30 000 ÷ 15 (1 mark)',
            'Answer: ×2000 (1 mark)',
          ],
        },
        {
          question:
            'Explain two ways in which a bacterial cell differs from a plant cell.',
          marks: 2,
          markScheme: [
            'Bacterial cell has no nucleus / genetic material not enclosed in a nucleus, whereas a plant cell does (1 mark)',
            'Bacterial cell has no chloroplasts / no permanent vacuole / is much smaller (1 mark)',
          ],
        },
        {
          question:
            'An electron microscope reveals more detail of a cell\'s interior than a light microscope. Explain why.',
          marks: 2,
          markScheme: [
            'Electron microscopes have a higher resolution (1 mark)',
            'So they can distinguish between structures that are closer together / smaller structures (1 mark)',
          ],
        },
      ],
    },

    // ---------------------------------------------------------------------
    // 4.1.2 Cell division
    // ---------------------------------------------------------------------
    {
      id: 'aqa-8461-4-1-2',
      slug: 'cell-division',
      unit: '4.1',
      title: 'Cell division',
      specRef: '4.1.2',
      tiers: ['foundation', 'higher'],
      summary:
        'Chromosomes, the cell cycle, mitosis, and what stem cells can and cannot do.',
      sections: [
        {
          heading: 'Chromosomes and genes',
          body: [
            'The nucleus of a human body cell contains 23 pairs of chromosomes — 46 in total. Each chromosome carries many genes.',
            'A gene is a small section of DNA that codes for a particular sequence of amino acids, and therefore a particular protein.',
            'Different versions of the same gene are called alleles. You inherit one allele for each gene from each parent.',
          ],
        },
        {
          heading: 'The cell cycle and mitosis',
          body: [
            'Body cells divide by mitosis to produce two genetically identical diploid cells. This is how organisms grow, replace damaged cells, and reproduce asexually.',
            'The cell cycle has three main stages: interphase (the cell grows, DNA replicates and new sub-cellular structures are made), mitosis (the chromosomes line up and are pulled to opposite ends of the cell), and cytokinesis (the cell membrane divides the cell in two).',
            'The DNA is copied during interphase, which is the longest stage — often longer than the rest of the cycle combined.',
          ],
          callout: {
            type: 'exam-tip',
            text: 'Do not describe meiosis when the question asks about mitosis. Meiosis produces four non-identical haploid gametes and is only examined in the context of sexual reproduction. Look for the words "gamete", "variation" or "haploid" to spot it.',
          },
        },
        {
          heading: 'Stem cells',
          body: [
            'A stem cell is an undifferentiated cell that can divide to produce more stem cells and can differentiate into specialised cells.',
            'Embryonic stem cells (from early embryos) can become almost any type of cell. Adult stem cells (found in bone marrow, for example) can only become a few cell types.',
            'Plant meristems are stem cells found in the tips of shoots and roots; unlike animal cells, plant stem cells can differentiate throughout the plant\'s life.',
            'Stem cells could be used to treat conditions caused by damaged or faulty cells — for example type 1 diabetes (insulin-producing cells) or paralysis (nerve cells).',
            'Therapeutic cloning: an embryo is produced with the same genes as the patient, so the stem cells taken from it will not be rejected by the patient\'s immune system.',
          ],
          callout: {
            type: 'warning',
            text: 'There is an ethical argument here, and exam boards regularly ask for it. Stem cells from embryos involve destroying an embryo — some people consider this unacceptable. Learn both sides, not just the medical benefits.',
          },
        },
        {
          heading: 'Cancer',
          body: [
            'Cancer is the result of changes in cells that lead to uncontrolled growth and division.',
            'Malignant tumour cells invade neighbouring tissues and spread to other parts of the body in the blood, forming secondary tumours. Benign tumours grow in one place and do not invade.',
            'Lifestyle and genetic risk factors include smoking, obesity, UV exposure, viral infection, and inherited genes.',
          ],
        },
      ],
      keyTerms: [
        { term: 'Chromosome', definition: 'A coiled strand of DNA. Human body cells contain 23 pairs.' },
        { term: 'Gene', definition: 'A section of DNA that codes for a particular protein.' },
        { term: 'Allele', definition: 'A different version of the same gene.' },
        { term: 'Mitosis', definition: 'Cell division producing two genetically identical diploid cells, used for growth and repair.' },
        { term: 'Differentiation', definition: 'The process by which a cell becomes specialised for a particular job.' },
        { term: 'Stem cell', definition: 'An undifferentiated cell that can divide and differentiate into other cell types.' },
        { term: 'Therapeutic cloning', definition: 'Producing an embryo with the same genes as a patient so stem cells from it are not rejected.' },
        { term: 'Malignant tumour', definition: 'A cancerous growth that invades neighbouring tissue and spreads.' },
        { term: 'Meristem', definition: 'Plant tissue containing stem cells, found at the tips of shoots and roots.' },
      ],
      examQuestions: [
        {
          question:
            'Describe what happens to the genetic material during mitosis.',
          marks: 3,
          markScheme: [
            'The DNA has already been copied / replicated during interphase (1 mark)',
            'Chromosomes line up and are pulled to opposite ends of the cell (1 mark)',
            'The cell divides to form two genetically identical cells (1 mark)',
          ],
        },
        {
          question:
            'Give one medical use of stem cells and one reason some people object to their use.',
          marks: 2,
          markScheme: [
            'Use: e.g. replacing insulin-producing cells in diabetes / nerve cells in paralysis / blood cells in leukaemia (1 mark)',
            'Objection: embryos are destroyed to obtain embryonic stem cells, which some consider unethical (1 mark)',
          ],
        },
        {
          question:
            'A malignant tumour has spread from the lung to the brain. Explain what this shows about the tumour.',
          marks: 2,
          markScheme: [
            'The cells have invaded / moved through the bloodstream to other tissues (1 mark)',
            'Forming secondary tumours at other sites / metastasis (1 mark)',
          ],
        },
      ],
    },

    // ---------------------------------------------------------------------
    // 4.1.3 Transport in cells
    // ---------------------------------------------------------------------
    {
      id: 'aqa-8461-4-1-3',
      slug: 'transport-in-cells',
      unit: '4.1',
      title: 'Transport in cells',
      specRef: '4.1.3',
      tiers: ['foundation', 'higher'],
      summary:
        'Diffusion, osmosis and active transport — how substances actually get in and out of cells.',
      sections: [
        {
          heading: 'Diffusion',
          body: [
            'Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration. It is passive — no energy from respiration is needed.',
            'The rate of diffusion increases with: a steeper concentration gradient, higher temperature, larger surface area, and a thinner membrane.',
            'Adaptations that speed up diffusion: in the lungs, alveoli have a very large surface area, a thin wall (one cell thick) and a good blood supply. In the small intestine, villi increase surface area. In leaves, flat leaf shape and stomata allow gas exchange.',
          ],
        },
        {
          heading: 'Osmosis',
          body: [
            'Osmosis is the diffusion of water through a partially permeable membrane, from a dilute solution (high water potential) to a concentrated solution (low water potential). It is also passive.',
            'Water potential is the potential of water molecules to move out of a solution. Pure water has the highest water potential; the more solute dissolved, the lower the water potential.',
            'In animal cells: if the surrounding solution is more dilute, water enters and the cell may burst (lysis). If more concentrated, water leaves and the cell shrinks (crenation).',
            'In plant cells: if water enters, the vacuole swells and pushes against the cell wall — the cell becomes turgid, which is normal and supportive. If water leaves, the cell becomes flaccid; if it loses too much, it plasmolyses (the membrane pulls away from the cell wall).',
          ],
          callout: {
            type: 'warning',
            text: 'Osmosis is only about water. If a question asks about movement of sugar or mineral ions, the answer is diffusion or active transport. Writing "osmosis of salt" gets zero marks.',
          },
        },
        {
          heading: 'Active transport',
          body: [
            'Active transport moves substances from a lower concentration to a higher concentration — against the gradient. Because this is the opposite of the natural direction, it requires energy from cellular respiration.',
            'Examples: root hair cells take up mineral ions from soil where the ion concentration in the soil is lower than in the root. In the gut, glucose is absorbed into the blood even when its concentration in the gut has fallen below that of the blood.',
            'Cells that carry out a lot of active transport have many mitochondria to supply the energy required.',
          ],
        },
      ],
      requiredPractical:
        'Investigate the effect of a range of concentrations of sugar solutions on the mass of plant tissue. Cut potato cylinders to equal length, blot dry, weigh, leave in each solution for a set time, then reweigh and calculate percentage change in mass. Plot the results and identify the concentration at which mass change is zero — that solution is isotonic to the potato tissue.',
      keyTerms: [
        { term: 'Diffusion', definition: 'Net movement of particles from higher to lower concentration. Passive.' },
        { term: 'Concentration gradient', definition: 'The difference in concentration between two areas. A steeper gradient means faster diffusion.' },
        { term: 'Osmosis', definition: 'Diffusion of water through a partially permeable membrane from high to low water potential. Passive.' },
        { term: 'Water potential', definition: 'The potential of water to move out of a solution. Pure water has the highest water potential.' },
        { term: 'Turgid', definition: 'A plant cell that is full of water and firm, pressing against the cell wall.' },
        { term: 'Plasmolysis', definition: 'When a plant cell loses so much water that the membrane pulls away from the cell wall.' },
        { term: 'Active transport', definition: 'Movement against a concentration gradient, requiring energy from respiration.' },
        { term: 'Isotonic', definition: 'A solution with the same water potential as the cell; no net movement of water.' },
      ],
      examQuestions: [
        {
          question:
            'A potato cylinder is left in a concentrated sugar solution for 30 minutes. Its mass decreases. Explain why.',
          marks: 3,
          markScheme: [
            'The sugar solution has a lower water potential than the potato cells (1 mark)',
            'Water moves out of the cells by osmosis (1 mark)',
            'Through the partially permeable membrane, from high to low water potential (1 mark)',
          ],
        },
        {
          question:
            'Root hair cells take up mineral ions from soil even when the ion concentration in the soil is lower than inside the cell. Explain how.',
          marks: 2,
          markScheme: [
            'By active transport, against the concentration gradient (1 mark)',
            'This requires energy from respiration (1 mark)',
          ],
        },
        {
          question:
            'Explain how the structure of an alveolus is adapted for efficient gas exchange.',
          marks: 3,
          markScheme: [
            'Large surface area (1 mark)',
            'Thin wall / one cell thick, giving a short diffusion distance (1 mark)',
            'Good blood supply to maintain a steep concentration gradient (1 mark)',
          ],
        },
      ],
    },
  ],
};
