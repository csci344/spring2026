import { useState, useEffect, useRef } from 'react';
import { triggerConfetti } from '@/lib/utils';

// Import types from Meeting component
interface Reading {
  citation: string | React.ReactElement;
  url?: string;
}

interface Activity {
  title: string;
  url?: string;
  draft?: number;
  excluded?: number;
}

interface Assignment {
  titleShort: string;
  title: string;
  url?: string;
  draft?: number;
}

interface MeetingData {
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

interface UseMeetingChecklistOptions {
  enableLocalStorage?: boolean;
  enableConfetti?: boolean;
}

export function useMeetingChecklist(
  meeting: MeetingData,
  meetingKey: string,
  options: UseMeetingChecklistOptions = {}
) {
  const { enableLocalStorage = true, enableConfetti = true } = options;
  
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const isInitialLoad = useRef(true);

  // Get all item keys for this meeting (excluding optional readings)
  function getAllItemKeys(): string[] {
    const allItemKeys: string[] = [];
    
    // Collect all activity keys (excluding excluded and draft activities)
    if (meeting.activities) {
      meeting.activities.forEach((activity, index) => {
        // Skip excluded activities and draft activities
        if (!(activity.excluded === 1) && !(activity.draft === 1)) {
          allItemKeys.push(`${meetingKey}-activity-${index}`);
        }
      });
    }
    
    // Collect all required reading keys
    if (meeting.readings) {
      meeting.readings.forEach((_, index) => {
        allItemKeys.push(`${meetingKey}-reading-${index}`);
      });
    }
    
    // Note: Optional readings are intentionally excluded from completion check
    
    // Note: "Assigned" items are intentionally excluded from completion check (only "Due" items are tracked)
    
    // Collect due key (excluding draft assignments)
    if (meeting.due && typeof meeting.due === 'object') {
      if (!(meeting.due.draft === 1)) {
        allItemKeys.push(`${meetingKey}-due`);
      }
    }
    
    return allItemKeys;
  }

  // Load checked items from localStorage on mount
  useEffect(() => {
    if (!enableLocalStorage || typeof window === 'undefined') {
      isInitialLoad.current = false;
      return;
    }
    
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
  }, [meetingKey, meeting, enableLocalStorage]);


  function areAllItemsCheckedWithState(items: Record<string, boolean>): boolean {
    const allItemKeys = getAllItemKeys();
    if (allItemKeys.length === 0) {
      return false;
    }
    return allItemKeys.every(key => items[key] === true);
  }

  function toggleChecked(itemKey: string) {
    const newChecked = !checkedItems[itemKey];
    const updatedItems = {
      ...checkedItems,
      [itemKey]: newChecked
    };
    
    setCheckedItems(updatedItems);
    
    if (enableLocalStorage && typeof window !== 'undefined') {
      localStorage.setItem(itemKey, JSON.stringify(newChecked));
    }
    
    // Check if all items are now checked (only after initial load, triggered by click)
    if (!isInitialLoad.current && enableConfetti) {
      const wasAllChecked = areAllItemsCheckedWithState(checkedItems);
      const isAllChecked = areAllItemsCheckedWithState(updatedItems);
      
      // Trigger confetti when transitioning from "not all checked" to "all checked"
      if (!wasAllChecked && isAllChecked) {
        triggerConfetti(enableConfetti);
      }
    }
  }

  function areAllItemsChecked(): boolean {
    return areAllItemsCheckedWithState(checkedItems);
  }

  function isChecked(itemKey: string): boolean {
    return checkedItems[itemKey] || false;
  }

  return {
    checkedItems,
    toggleChecked,
    isChecked,
    areAllItemsChecked,
  };
}
