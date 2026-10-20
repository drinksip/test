'use client';

/**
 * Client-side progress store.
 *
 * No accounts, no server. Everything lives in localStorage under one key and
 * can be exported or wiped by the student. This is a deliberate privacy choice —
 * see docs/DECISIONS.md.
 *
 * Shape is designed to support spaced repetition later: confidence plus a
 * lastReviewed timestamp is everything an SM-2 style scheduler needs.
 */

import type { Confidence } from './types';

const STORAGE_KEY = 'spec-checked:progress:v1';

export interface TopicProgress {
  confidence: Confidence;
  lastReviewed: string | null;
  /** Mark-scheme point indices the student has ticked. */
  examQuestionScore: Record<string, boolean[]>;
}

export type ProgressMap = Record<string, TopicProgress>;

function emptyProgress(): TopicProgress {
  return { confidence: 0, lastReviewed: null, examQuestionScore: {} };
}

export function readProgress(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressMap;
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function writeProgress(map: ProgressMap): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event('spec-checked:progress-changed'));
  } catch {
    // Storage full or blocked — fail silently rather than break the page.
  }
}

export function getTopicProgress(map: ProgressMap, topicId: string): TopicProgress {
  return map[topicId] ?? emptyProgress();
}

export function setConfidence(topicId: string, confidence: Confidence): void {
  const map = readProgress();
  const entry = getTopicProgress(map, topicId);
  map[topicId] = {
    ...entry,
    confidence,
    lastReviewed: new Date().toISOString(),
  };
  writeProgress(map);
}

export function setExamPoint(
  topicId: string,
  questionIndex: number,
  pointIndex: number,
  checked: boolean
): void {
  const map = readProgress();
  const entry = getTopicProgress(map, topicId);
  const key = String(questionIndex);
  const points = entry.examQuestionScore[key] ?? [];
  points[pointIndex] = checked;
  map[topicId] = {
    ...entry,
    lastReviewed: new Date().toISOString(),
    examQuestionScore: { ...entry.examQuestionScore, [key]: points },
  };
  writeProgress(map);
}

export function exportProgress(): string {
  return JSON.stringify(readProgress(), null, 2);
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('spec-checked:progress-changed'));
}
