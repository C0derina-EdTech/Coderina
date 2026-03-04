"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import toast from "react-hot-toast";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [error, setError] = useState(null);

  // 🔥 Universal API fetcher
  const fetchData = useCallback(async () => {
    if (hasFetched) return;

    setLoading(true);
    setError(null);

    try {
      const endpoints = [
        { key: "posts", url: "/api/blog" },
        { key: "events", url: "/api/events" },
      ];

      const responses = await Promise.allSettled(
        endpoints.map((ep) => fetch(ep.url).then((res) => res.json())),
      );

      responses.forEach((result, index) => {
        const key = endpoints[index].key;

        if (result.status === "fulfilled") {
          const data = result.value;

          if (data.success) {
            switch (key) {
              case "posts":
                setPosts(data.data || []);
                break;
              case "events":
                setEvents(data.data || []);
                break;
              default:
                break;
            }
          } else {
            console.warn(`${key} API returned error`);
          }
        } else {
          console.error(`${key} fetch failed:`, result.reason);
        }
      });

      setHasFetched(true);
    } catch (err) {
      console.error("Global fetch error:", err);
      setError(err.message);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, [hasFetched]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Manual refetch
  const refetch = async () => {
    setHasFetched(false);
    await fetchData();
  };

  // ✅ Track post view
  const trackView = useCallback(async (slug) => {
    if (!slug) return;

    try {
      await fetch(`/api/views/${slug}`, { method: "POST" });
    } catch (err) {
      console.error("Failed to track view:", err);
    }
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        events,
        loading,
        error,
        refetch,
        trackView,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within PostProvider");
  }
  return context;
}
