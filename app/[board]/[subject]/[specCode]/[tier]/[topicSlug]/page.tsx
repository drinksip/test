import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllTopicParams,
  getAdjacentTopics,
  getCourse,
  getTopic,
} from '@/lib/content';
import {
