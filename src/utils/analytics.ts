// Google Ads & GA4 Conversion Event Tracking Helper

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Fires a custom analytics / conversion tracking event.
 * Compatible with Google Tag Manager, Google Ads (gtag.js), and GA4.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window !== 'undefined') {
      // 1. If gtag is available (Google Ads / GA4 directly)
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }

      // 2. If dataLayer is available (Google Tag Manager)
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          ...params,
        });
      }

      // 3. Development log
      if (import.meta.env.DEV) {
        console.log(`[Analytics Event] ${eventName}:`, params);
      }
    }
  } catch (err) {
    console.error('Analytics tracking error:', err);
  }
}
