import Link from 'next/link';
import { getAllCourses } from '@/lib/content';

export default function HomePage() {
  const courses = getAllCourses();

  return (
    <>
      <h1>Everything you need to know. Actually.</h1>
      <p className="lede">
        Most revision sites cover every subject shallowly. This one covers one
        subject properly, and tells you exactly which specification version each
        page was checked against.
      </p>

      <div className="panel panel--surface">
        <h2 style={{ marginTop: 0, borderBottom: 'none' }}>The rule</h2>
        <p style={{ marginBottom: '0.75rem' }}>
          A topic goes live only when it is complete: every specification point
          covered, key terms defined, exam questions with mark schemes, and the
          page dated against the current spec.
        </p>
        <p style={{ marginBottom: 0 }}>
          Anything not yet at that standard is labelled as in progress. You will
          never find a stub pretending to be a revision page.
        </p>
      </div>

      <h2>Available now</h2>
      <ul className="topic-list">
        {courses.map((course) => {
          const publishedUnits = course.units.filter((u) => u.published).length;
          const publishedTopics = course.topics.length;
          return (
            <li key={`${course.board}-${course.subject}-${course.specCode}`}>
              <Link
                href={`/${course.board}/${course.subject}/${course.specCode}`}
              >
                <span>
                  <span className="topic-list__title">
                    {course.boardName} GCSE {course.subjectName}
                  </span>
                  <span className="muted small" style={{ display: 'block' }}>
                    {publishedUnits} of {course.units.length} units published ·{' '}
                    {publishedTopics} topics
                  </span>
                </span>
                <span className="topic-list__ref">{course.specCode}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>Why so narrow?</h2>
      <p>
        Because the alternative does not work. A funded competitor publishes 410
        topics across 54 courses — roughly eight per course. A real GCSE biology
        specification is far deeper than that. Covering twenty subjects at that
        depth is how you end up with a site that looks comprehensive and is
        useless on the night before the exam.
      </p>
      <p>
        Start with one board, one tier, one subject. Make it genuinely complete.
        Everything else follows.
      </p>
    </>
  );
}
