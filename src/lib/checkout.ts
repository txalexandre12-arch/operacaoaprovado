/**
 * Automatically appends all current URL parameters to a given checkout URL.
 * Preserves existing parameters and ensures no duplicates.
 */
export function getCheckoutUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;
  
  try {
    const url = new URL(baseUrl);
    const searchParams = new URLSearchParams(window.location.search);
    
    // Add all current search params to the target URL if they don't already exist or to override
    searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    
    return url.toString();
  } catch (e) {
    console.error("Error formatting checkout URL:", e);
    return baseUrl;
  }
}
