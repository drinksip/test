import type { Course, Tier, Topic } from './types';
import { course as aqaBiology8461 } from '@/content/aqa/biology/8461';

/**
 * Course registry.
 *
 * Adding a course: import its module and append it here. Routes are generated
 * from this array, so no routing code needs to change.
 */
const courses: Course[] = [aqaBiology8461];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourse(
  board: string,
  subject: string,
  specCode: string
): Course | undefined {
  return courses.find(
    (c) => c.board === board && c.subject === subject && c.specCode === specCode
  );
}

export function getTopic(course: Course, tier: Tier, slug: string): Topic | undefined {
  return course.topics.find(
    (t) => t.slug === slug && t.tiers.includes(tier)
  );
}

export function getTopicsForUnit(course: Course, unitCode: string, tier: Tier): Topic[] {
  return course.topics.filter((t) => t.unit === unitCode && t.tiers.includes(tier));
}

export function getAdjacentTopics(
  course: Course,
  tier: Tier,
  slug: string
): { prev: Topic | null; next: Topic | null } {
  const ordered = course.topics.filter((t) => t.tiers.includes(tier));
  const index = ordered.findIndex((t) => t.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

/** Every (board, subject, specCode) triple — for generateStaticParams at course level. */
export function getAllCourseParams() {
  return courses.map((c) => ({
    board: c.board,
    subject: c.subject,
    specCode: c.specCode,
  }));
}

/** Every (board, subject, specCode, tier, topicSlug) tuple — for topic-level static generation. */
export function getAllTopicParams() {
  return courses.flatMap((c) =>
    c.topics.flatMap((t) =>
      t.tiers.map((tier) => ({
        board: c.board,
        subject: c.subject,
        specCode: c.specCode,
        tier,
        topicSlug: t.slug,
      }))
    )
  );
}
