import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility statement',
};

export default function AccessibilityPage() {
  return (
    <>
      <h1>Accessibility statement</h1>
      <p className="lede">
        This site aims to meet WCAG 2.2 Level AA in full — all 55 Level A and AA
        success criteria.
      </p>

      <h2>What has been done</h2>
      <ul>
        <li>
          <strong>Keyboard only.</strong> Every interactive element can be reached
          and operated with a keyboard. There are no drag-only interactions.
        </li>
        <li>
          <strong>No hover-only content.</strong> Nothing appears only on hover and
          vanishes on focus.
        </li>
        <li>
          <strong>Target sizes.</strong> All controls are at least 44 by 44 CSS
          pixels, comfortably above the 24 pixel minimum.
        </li>
        <li>
          <strong>Contrast.</strong> Body text meets 4.5:1 and interface
