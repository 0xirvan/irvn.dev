export const webVitals = () => {
  try {
    if (typeof window !== "undefined" && "performance" in window) {
      // Only load web-vitals when in the browser
      import("web-vitals").then((webVitals) => {
        // Create a function to send metrics to your analytics
        const sendToAnalytics = (metric: any) => {
          // Extract the necessary data from the metric
          const { name, value, id } = metric;
          if (process.env.NODE_ENV !== "production") {
            console.log(`Web Vitals: ${name} = ${value}`);
          }
        };

        // Measure each metric using the updated API (web-vitals v5)
        webVitals.onCLS(sendToAnalytics); // Cumulative Layout Shift
        webVitals.onLCP(sendToAnalytics); // Largest Contentful Paint
        webVitals.onFCP(sendToAnalytics); // First Contentful Paint
        webVitals.onTTFB(sendToAnalytics); // Time to First Byte
        webVitals.onINP(sendToAnalytics); // Interaction to Next Paint (new in v5)
        // Note: FID was removed in web-vitals v5 in favor of INP
      });
    }
  } catch (error) {
    console.error("Failed to load web-vitals", error);
  }
};

// Export additional SEO utility functions
export const generateCanonicalURL = (
  path: string,
  baseURL: string = "https://irvanprama.dev"
) => {
  if (path.startsWith("/")) {
    return new URL(path, baseURL).toString();
  }
  return new URL(`/${path}`, baseURL).toString();
};

export const truncateDescription = (
  text: string,
  maxLength: number = 160
): string => {
  if (!text || text.length <= maxLength) return text;

  // Try to find a period or space near the maxLength to make a clean cut
  const periodIndex = text.lastIndexOf(".", maxLength);
  if (periodIndex > maxLength - 30) {
    return text.substring(0, periodIndex + 1);
  }

  const spaceIndex = text.lastIndexOf(" ", maxLength);
  return text.substring(0, spaceIndex) + "...";
};
