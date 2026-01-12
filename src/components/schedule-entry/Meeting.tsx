'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Reading {
  citation: string | React.ReactElement;
  url?: string;
}

interface Activity {
  title: string;
  url?: string;
  draft?: number;
}

interface Assignment {
  titleShort: string;
  title: string;
  url?: string;
  draft?: number;
}

export interface MeetingData {
  date: string;
  topic: string;
  description?: string | React.ReactElement;
  activities?: Activity[];
  readings?: Reading[];
  optionalReadings?: Reading[];
  holiday?: boolean;
  discussionQuestions?: string;
  assigned?: Assignment | string;
  due?: Assignment | string;
}

export default function Meeting({ 
  meeting, 
  showDetails, 
  setShowDetails 
}: { 
  meeting: MeetingData;
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
}) {
  const [isDark, setIsDark] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const previousAllChecked = useRef(false);
  const isInitialLoad = useRef(true);
  const meetingKey = `meeting-${meeting.date}-${meeting.topic.replace(/\s+/g, '-').toLowerCase()}`;
  const hasActivities = 'activities' in meeting && meeting.activities && meeting.activities.length > 0;
  const hasReadings = 'readings' in meeting && meeting.readings && meeting.readings.length > 0;
  const hasOptionalReadings = 'optionalReadings' in meeting && meeting.optionalReadings && meeting.optionalReadings.length > 0;
  const hasMoreDetails = hasActivities || hasReadings;
  const hasDiscussionQuestions = 'discussionQuestions' in meeting && meeting.discussionQuestions;
  const isHoliday = 'holiday' in meeting && meeting.holiday;

  useEffect(() => {
    // Check if dark mode is active
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Load checked items from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedCheckedItems: Record<string, boolean> = {};
    
    // Load activities
    if (meeting.activities) {
      meeting.activities.forEach((activity, index) => {
        const key = `${meetingKey}-activity-${index}`;
        const saved = localStorage.getItem(key);
        if (saved !== null) {
          savedCheckedItems[key] = JSON.parse(saved);
        }
      });
    }
    
    // Load required readings
    if (meeting.readings) {
      meeting.readings.forEach((reading, index) => {
        const key = `${meetingKey}-reading-${index}`;
        const saved = localStorage.getItem(key);
        if (saved !== null) {
          savedCheckedItems[key] = JSON.parse(saved);
        }
      });
    }
    
    // Load optional readings
    if (meeting.optionalReadings) {
      meeting.optionalReadings.forEach((reading, index) => {
        const key = `${meetingKey}-optional-reading-${index}`;
        const saved = localStorage.getItem(key);
        if (saved !== null) {
          savedCheckedItems[key] = JSON.parse(saved);
        }
      });
    }
    
    // Load assigned
    if (meeting.assigned && typeof meeting.assigned === 'object') {
      const key = `${meetingKey}-assigned`;
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        savedCheckedItems[key] = JSON.parse(saved);
      }
    }
    
    // Load due
    if (meeting.due && typeof meeting.due === 'object') {
      const key = `${meetingKey}-due`;
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        savedCheckedItems[key] = JSON.parse(saved);
      }
    }
    
    setCheckedItems(savedCheckedItems);
    
    // Mark initial load as complete after a short delay to ensure state is set
    setTimeout(() => {
      isInitialLoad.current = false;
    }, 100);
  }, [meetingKey, meeting]);

  function toggleDetails(e: React.MouseEvent<HTMLElement>) {
    
    // Don't toggle if clicking on a link or button within the clickable div:
    const target = e.target as HTMLElement;
    if (target.closest('a')) {
      return;
    }
    
    const newState = !showDetails;
    setShowDetails(newState);
    localStorage.setItem(meetingKey, JSON.stringify(newState));  
  }

  function triggerConfetti() {
    if (typeof window === 'undefined') return;
    
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Launch confetti from the left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      // Launch confetti from the right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }

  function toggleChecked(itemKey: string) {
    const newChecked = !checkedItems[itemKey];
    const updatedItems = {
      ...checkedItems,
      [itemKey]: newChecked
    };
    
    setCheckedItems(updatedItems);
    localStorage.setItem(itemKey, JSON.stringify(newChecked));
    
    // Check if all items are now checked (only after initial load, triggered by click)
    if (!isInitialLoad.current) {
      const wasAllChecked = areAllItemsCheckedWithState(checkedItems);
      const isAllChecked = areAllItemsCheckedWithState(updatedItems);
      
      // Trigger confetti when transitioning from "not all checked" to "all checked"
      if (!wasAllChecked && isAllChecked) {
        triggerConfetti();
      }
    }
  }

  // Get all item keys for this meeting
  function getAllItemKeys(): string[] {
    const allItemKeys: string[] = [];
    
    // Collect all activity keys
    if (meeting.activities) {
      meeting.activities.forEach((_, index) => {
        allItemKeys.push(`${meetingKey}-activity-${index}`);
      });
    }
    
    // Collect all required reading keys
    if (meeting.readings) {
      meeting.readings.forEach((_, index) => {
        allItemKeys.push(`${meetingKey}-reading-${index}`);
      });
    }
    
    // Collect all optional reading keys
    if (meeting.optionalReadings) {
      meeting.optionalReadings.forEach((_, index) => {
        allItemKeys.push(`${meetingKey}-optional-reading-${index}`);
      });
    }
    
    // Collect assigned key
    if (meeting.assigned && typeof meeting.assigned === 'object') {
      allItemKeys.push(`${meetingKey}-assigned`);
    }
    
    // Collect due key
    if (meeting.due && typeof meeting.due === 'object') {
      allItemKeys.push(`${meetingKey}-due`);
    }
    
    return allItemKeys;
  }

  // Check if all items are checked (using current checkedItems state)
  function areAllItemsChecked(): boolean {
    const allItemKeys = getAllItemKeys();
    if (allItemKeys.length === 0) {
      return false;
    }
    return allItemKeys.every(key => checkedItems[key] === true);
  }

  // Check if all items are checked given a specific items state
  function areAllItemsCheckedWithState(items: Record<string, boolean>): boolean {
    const allItemKeys = getAllItemKeys();
    if (allItemKeys.length === 0) {
      return false;
    }
    return allItemKeys.every(key => items[key] === true);
  }

  // Update previousAllChecked for background color changes (but don't trigger confetti here)
  useEffect(() => {
    const allChecked = areAllItemsChecked();
    previousAllChecked.current = allChecked;
  }, [checkedItems, meetingKey, meeting]);

  function renderActivity(activity: Activity, index: number) {
    const itemKey = `${meetingKey}-activity-${index}`;
    const isChecked = checkedItems[itemKey] || false;
    
    return (
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleChecked(itemKey)}
          onClick={(e) => e.stopPropagation()}
          className="mt-1 w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 accent-blue-600 dark:accent-blue-400 cursor-pointer flex-shrink-0"
          style={isDark ? { 
            backgroundColor: isChecked ? '#3b82f6' : '#1f2937',
            borderColor: isChecked ? '#3b82f6' : '#4b5563'
          } : undefined}
        />
        <div className="flex-1">
          {activity.draft && activity.draft === 1 ? (
            <span className={isChecked ? '!line-through opacity-60' : ''}>{activity.title}</span>
          ) : (
            <>
              {(() => {
                const isExternalLink = activity.url?.startsWith('https');
                const url = activity.url || '#';
                const linkClass = `text-blue-600 dark:text-blue-400 hover:underline ${isChecked ? '!line-through opacity-60' : ''}`;
                
                if (isExternalLink) {
                  return <Link href={url} target="_blank" className={linkClass} onClick={(e) => e.stopPropagation()}>{activity.title}</Link>;
                }
                return <Link href={url} className={linkClass} onClick={(e) => e.stopPropagation()}>{activity.title}</Link>;
              })()}
            </>
          )}
        </div>
      </div>
    );
  }

  function renderActivities() {
    if (hasActivities) {
      return (
        <div className="mb-6">
            {hasActivities ? <strong className="text-gray-700 dark:text-gray-300" style={isDark ? { color: '#d1d5db' } : undefined}>Slides / Activities</strong> : ``}
            <ul className="!list-none !pl-4">
                {'activities' in meeting && meeting.activities?.map((activity: Activity, index: number) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                    {renderActivity(activity, index)}
                </li>
                ))}
            </ul>
        </div>
      )
    }
    return ``;
  } 

  function renderReadings({title, readings, isOptional}: {title: string, readings:Reading[], isOptional?: boolean}) {
    return (
      <div className="mb-6">
          {<strong className="text-gray-700 dark:text-gray-300" style={isDark ? { color: '#d1d5db' } : undefined}>{title}</strong>}
          <ol className="!list-none !pl-4">
              {
              readings.map((reading: Reading, index: number) => {
                  const itemKey = `${meetingKey}-${isOptional ? 'optional-reading' : 'reading'}-${index}`;
                  const isChecked = checkedItems[itemKey] || false;
                  
                  return (
                  <li key={index} className="mb-0 text-gray-700 dark:text-gray-300">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleChecked(itemKey)}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-1 w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 accent-blue-600 dark:accent-blue-400 cursor-pointer flex-shrink-0"
                          style={isDark ? { 
                            backgroundColor: isChecked ? '#3b82f6' : '#1f2937',
                            borderColor: isChecked ? '#3b82f6' : '#4b5563'
                          } : undefined}
                        />
                        <div className={`flex-1 ${isChecked ? '!line-through opacity-60' : ''}`}>
                          {reading.citation} {" "}
                          {reading.url && (
                            <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" onClick={(e) => e.stopPropagation()}>
                                Link
                            </a>
                          )}
                        </div>
                      </div>
                  </li>
                  )
              })
              }
          </ol>
      </div>
    )
  }

  function renderDiscussionQuestions() {
    if (hasDiscussionQuestions) {
      return (
        <div className="mt-4">
            {hasDiscussionQuestions ? <strong className="text-gray-700 dark:text-gray-300">Discussion Questions</strong> : ``}
            <div className="text-gray-700 dark:text-gray-300">
                {meeting.discussionQuestions}
            </div>
        </div>
      )
    }
  } 

  function renderAssignment(assignment: Assignment | string, type: 'assigned' | 'due') {
    if (typeof assignment === 'string') {
      return assignment;
    }
    
    const itemKey = `${meetingKey}-${type}`;
    const isChecked = checkedItems[itemKey] || false;
    
    return (
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleChecked(itemKey)}
          onClick={(e) => e.stopPropagation()}
          className="mt-1 w-4 h-4 rounded border-2 border-gray-300 dark:border-gray-600 accent-blue-600 dark:accent-blue-400 cursor-pointer flex-shrink-0"
          style={isDark ? { 
            backgroundColor: isChecked ? '#3b82f6' : '#1f2937',
            borderColor: isChecked ? '#3b82f6' : '#4b5563'
          } : undefined}
        />
        <div className={`flex-1 ${isChecked ? '!line-through opacity-60' : ''}`}>
          {assignment.draft && assignment.draft === 1 ? (
            <>{assignment.titleShort}: {assignment.title}</>
          ) : (
            <><Link href={assignment.url || '#'} className="text-blue-600 dark:text-blue-400 hover:underline" onClick={(e) => e.stopPropagation()}>{assignment.titleShort}</Link>: {assignment.title}</>
          )}
        </div>
      </div>
    );
  }

  function renderDetailsButton(allChecked: boolean) {
    return (
      <div className="flex items-center gap-2">
        {allChecked && (
          <div 
            className="flex items-center justify-center w-7 h-7 rounded-full bg-green-700 dark:bg-green-300 transition-all duration-200" 
            title="All tasks completed!"
            style={{ textDecoration: 'none' }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} style={{ textDecoration: 'none' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" style={{ textDecoration: 'none' }} />
            </svg>
          </div>
        )}
        {hasMoreDetails && (
          <button 
            onClick={toggleDetails} 
            className="text-black dark:text-gray-200 hover:text-sky-700 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 flex justify-center items-center rounded-full w-[35px] h-[35px] transition-colors"
            style={isDark ? { color: '#e5e7eb' } : undefined}
          >
            {showDetails ? 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
              </svg>: 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
              </svg>
            }
          </button>
        )}
      </div>
    );
  }

  function getMeetingContainerStyles(allChecked: boolean) {
    const baseClassName = "flex justify-between gap-4 border-b border-black dark:border-gray-800 pt-4 pb-2 transition-colors";
    
    const className = clsx(baseClassName, {
      'bg-gray-100 dark:bg-gray-800': isHoliday,
      'bg-green-50 dark:bg-green-900/20': allChecked && !isHoliday
    });

    let style: React.CSSProperties | undefined = undefined;

    if (isDark) {
      if (isHoliday) {
        style = { borderColor: '#1f2937', backgroundColor: '#1f2937' };
      } else if (allChecked) {
        style = { borderColor: '#1f2937', backgroundColor: 'rgba(20, 83, 45, 0.2)' };
      } else {
        style = { borderColor: '#1f2937' };
      }
    } else {
      if (allChecked && !isHoliday) {
        style = { backgroundColor: '#f0fdf4' };
      }
    }

    return { className, style };
  } 

  const allChecked = areAllItemsChecked();
  const { className: containerClassName, style: containerStyle } = getMeetingContainerStyles(allChecked);
  
  return (
    <div 
      className={containerClassName}
      style={containerStyle}
    >
        <div className={clsx("flex gap-4", {
            'flex-col': showDetails,
            'md:flex-row': showDetails
        })}>
            <span className={clsx("w-[100px] flex-shrink-0 transition-all duration-300 ease-in-out cursor-pointer", {
                'font-bold': true
            })} onClick={toggleDetails}>{meeting.date}</span>
            <div className="w-full">
                <p className={clsx({
                    '!mb-3': !showDetails,
                    '!mb-0': showDetails,
                    'cursor-pointer': 'pointer',
                  })} onClick={toggleDetails}><span className={clsx("transition-all duration-300 ease-in-out", {
                    'font-bold': showDetails,
                    'text-black dark:text-white': showDetails,
                    // 'uppercase': showDetails
                })}>{meeting.topic}</span></p>
                <div 
                  className={clsx("overflow-hidden transition-all duration-300 ease-in-out", {
                      'text-gray-100 dark:text-gray-300': isHoliday,
                      'max-h-0 opacity-0': !showDetails,
                      'max-h-[1000px] opacity-100': showDetails
                  })}
                  style={isDark && isHoliday ? { color: '#d1d5db' } : undefined}
                >
                    { meeting.description && (
                        typeof meeting.description === 'string' 
                          ? <p>{meeting.description}</p>
                          : meeting.description
                    )}
                    {renderActivities()}
                    {hasReadings ? renderReadings({title: 'Required Readings', readings: meeting.readings || [], isOptional: false}) : ``}
                    {hasOptionalReadings ? renderReadings({title: 'Optional Readings', readings: meeting.optionalReadings || [], isOptional: true}) : ``}
                    {renderDiscussionQuestions()}
                    {
                      meeting.assigned ? ( 
                        <div className="mb-4">
                          <strong className="text-gray-700 dark:text-gray-300">Assigned: </strong>
                          {renderAssignment(meeting.assigned, 'assigned')}
                        </div>
                        ) : ''
                    }
                    {
                      meeting.due ? ( 
                        <div className="mb-4">
                          <strong className="text-gray-700 dark:text-gray-300" style={isDark ? { color: '#d1d5db' } : undefined}>Due: </strong>
                          {renderAssignment(meeting.due, 'due')}
                        </div>
                        ) : ''
                    }
                </div>
            </div> 
        </div> 
        <div>
            {renderDetailsButton(allChecked)}
        </div>
    </div>
  )
}