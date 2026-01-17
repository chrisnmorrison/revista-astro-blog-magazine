/**
 * Date Formatting Utilities
 */

export interface DateFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  locale?: string;
}

/**
 * Format a date to a readable string
 * @param date - Date string, Date object, or number
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date | number,
  options: DateFormatOptions = {}
): string {
  const {
    year = 'numeric',
    month = 'long',
    day = 'numeric',
    locale = 'en-US',
  } = options;

  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;

  return dateObj.toLocaleDateString(locale, {
    year,
    month,
    day,
  });
}

/**
 * Get ordinal suffix for a day (1st, 2nd, 3rd, 4th, etc.)
 * @param day - Day of the month
 * @returns Ordinal suffix
 */
function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/**
 * Format a date to a short format (e.g., "Oct, 28th 2022")
 * @param date - Date string, Date object, or number
 * @returns Formatted date string
 */
export function formatDateShort(date: string | Date | number): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const year = dateObj.getFullYear();
  const ordinal = getOrdinalSuffix(day);
  
  return `${month}, ${day}${ordinal} ${year}`;
}

/**
 * Format a date to a long format (e.g., "October, 28th 2022")
 * @param date - Date string, Date object, or number
 * @returns Formatted date string
 */
export function formatDateLong(date: string | Date | number): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();
  const ordinal = getOrdinalSuffix(day);
  
  return `${month}, ${day}${ordinal} ${year}`;
}
