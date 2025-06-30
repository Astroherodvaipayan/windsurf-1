'use client';

import React from 'react';
import { NotebookOverlay } from './notebook-overlay';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      {children}
      <NotebookOverlay />
    </>
  );
} 