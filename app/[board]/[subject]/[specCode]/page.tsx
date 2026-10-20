import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCourseParams, getCourse, getTopicsForUnit } from '@/lib/content';

export function generateStaticParams() {
  return getAllCourseParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ board: string; subject: string; specCode: string }>;
}): Promise<Metadata> {
  const { board, subject, specCode } = await params;
  const course = getCourse(board, subject, specCode);
  if (!course) return {};
  return {
    title:
