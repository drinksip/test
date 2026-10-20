/**
 * Content model.
 *
 * Deliberately flat: a Topic is the atomic unit of content, and it carries its
 * own spec reference. This is what makes the shared-node-plus-overlay model
 * possible later — a single Topic can be referenced from several Course objects.
 */

export type Tier = 'foundation' | 'higher';

/** 0 = not started, 1 = shaky, 2 = okay, 3 = confident */
export type Confidence = 0 | 1 | 2 | 3;

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface ExamQuestion {
  question: string;
  marks: number;
  /** Individual mark-scheme points. Students self-mark against these. */
  markScheme: string[];
}

export type CalloutType = 'practical' | 'exam-tip' | 'warning';

export interface Section {
  heading: string;
  /** Paragraphs of body copy. Plain strings, rendered as <p>. */
  body: string[];
  callout?: {
    type: CalloutType;
    text: string;
  };
}

export interface Topic {
  /** Stable unique id, e.g. "aqa-8461-4-1-1" */
  id: string;
  /** URL slug, e.g. "cell-structure" */
  slug: string;
  /** Unit this belongs to, e.g. "4.1" */
  unit: string;
  title: string;
  /** Specification point reference, e.g. "4.1.1" */
  specRef: string;
  tiers: Tier[];
  summary: string;
  sections: Section[];
  keyTerms: KeyTerm[];
  examQuestions: ExamQuestion[];
  requiredPractical?: string;
}

export interface Unit {
  code: string;
  title: string;
  /** True once every topic in the unit has been written and checked. */
  published: boolean;
}

export interface Course {
  board: string;
  boardName: string;
  subject: string;
  subjectName: string;
  specCode: string;
  specTitle: string;
  /** Specification version this content was checked against. */
  specVersion: string;
  /** ISO date of the last check against the official specification. */
  checkedDate: string;
  tiers: Tier[];
  units: Unit[];
  topics: Topic[];
}
