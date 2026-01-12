'use client'

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useChecklist } from '@/components/schedule-entry/useChecklist';
import DaysLeft from '@/components/DaysLeft';
import { formatDate } from '@/lib/utils';

interface AssignmentData {
  id: string;
  num?: string;
  title: string;
  excerpt?: string;
  date?: string;
  due_date?: string;
  type?: string;
  assigned?: string;
  notes?: string;
  draft?: number;
  external_url?: string;
  external_type?: string;
  excluded?: boolean;
}

interface AssignmentRowProps {
  assignment: AssignmentData;
  showWeek: string;
}

export default function AssignmentRow({ assignment, showWeek }: AssignmentRowProps) {
  const [isDark, setIsDark] = useState(false);
  // Use useMemo to stabilize the itemIds array
  const itemIds = useMemo(() => [assignment.id], [assignment.id]);
  const checklist = useChecklist(itemIds, { 
    enableLocalStorage: true, 
    storagePrefix: 'assignment' 
  });
  const isChecked = checklist.isChecked(assignment.id);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  function titleCase(str: string): string {
    if (str.toLowerCase() === 'assignment') {
      return 'Homework';
    }
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function isDraft(assignment: AssignmentData): boolean {
    return (assignment.draft !== undefined && assignment.draft === 1);
  }

  function getAssignmentLink(assignment: AssignmentData): React.ReactNode {
    if (isDraft(assignment)) {
      return <>{assignment.type ? titleCase(assignment.type) : ''} {assignment.num ? assignment.num : ''}</>;
    }
    
    // Handle external assignments
    if (assignment.external_url) {
      return (
        <>
        <a 
          href={assignment.external_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-200 hover:underline"
        >
          {assignment.type ? titleCase(assignment.type) : ''} {assignment.num ? assignment.num : ''}</a>
        <span className="ml-1 text-xs">↗</span>
        </>
      );
    }
    
    // Handle regular markdown assignments
    return (<>
      <Link href={`/assignments/${assignment.id}`} className="text-blue-600 dark:text-blue-200 hover:underline">
        {assignment.type ? titleCase(assignment.type) : ''} {assignment.num ? assignment.num : ''}
      </Link>
      {assignment.notes && (
        <span className="ml-1 text-xs">({assignment.notes})</span>
      )}
      </>
    );
  }

  const isDraftAssignment = isDraft(assignment);
  const shouldShowCheckbox = !isDraftAssignment;

  return (
    <tr className={`p-6 ${isChecked ? 'opacity-60' : ''}`}>
      <td className="w-[50px]">
        {shouldShowCheckbox && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => checklist.toggleChecked(assignment.id)}
            aria-label={`Mark assignment "${assignment.type ? titleCase(assignment.type) : ''} ${assignment.num || ''}" as ${isChecked ? 'incomplete' : 'complete'}`}
            className="w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 accent-blue-600 dark:accent-blue-400 cursor-pointer flex-shrink-0"
            style={isDark ? { 
              backgroundColor: isChecked ? '#3b82f6' : '#1f2937',
              borderColor: isChecked ? '#3b82f6' : '#4b5563'
            } : undefined}
          />
        )}
      </td>
      <td className="hidden md:table-cell w-[100px]">
        <strong>{showWeek}</strong>
      </td>
      <td>
        <div className={isChecked ? 'line-through' : ''}>
          {getAssignmentLink(assignment)}
        </div>
      </td>
      <td className="hidden md:table-cell md:w-[400px]">
        <div className={isChecked ? 'line-through' : ''}>{assignment.title}</div>
      </td>
      <td>{assignment.due_date ? formatDate(assignment.due_date) : ''}</td>
      <td><DaysLeft dueDate={assignment.due_date || ''} /></td>
    </tr>
  );
}
