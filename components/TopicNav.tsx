import Link from 'next/link';
import type { Topic } from '@/lib/types';

export function TopicNav({
  prev,
  next,
  basePath,
}: {
  prev: Topic | null;
  next: Topic | null;
  basePath: string;
}) {
  if (!prev && !next) return null
