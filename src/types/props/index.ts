import { ReactNode } from 'react';

export interface NavItemProps {
  children: ReactNode;
  contentName?: string;
  path: string;
}
