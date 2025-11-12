"use client";

import { useCallback } from "react";
import { useReportWebVitals } from "next/web-vitals";

export default function WebVitalsReporter() {
  // Function runs whenever a metric (LCP, FID, CLS, etc.) is recorded
  const reportMetric = useCallback((metric: any) => {
    try {
      const body = JSON.stringify({
        id: metric.id,
        name: metric.name,
        label: metric.label,
        value: metric.value,
        delta: metric.delta,
        url: window.location.pathname,
        timestamp: Date.now(),
      });

      // Use sendBeacon for reliability (fires even if user navigates away)
      const endpoint = "/api/web-vitals";
      console.log("endpoint", endpoint, body);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, body);
      } else {
        fetch(endpoint, {
          method: "POST",
          body,
          headers: { "Content-Type": "application/json" },
          keepalive: true,
        });
      }

    } catch (err) {
      console.error("WebVitalsReporter error:", err);
    }
  }, []);

  useReportWebVitals(reportMetric);

  return null; // no UI
}
