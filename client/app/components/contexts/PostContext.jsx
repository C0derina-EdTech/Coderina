// context/PostContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
const PostContext = createContext();

// Define API_URL outside component to avoid dependency array issues
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function PostProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [isSuccess, setSuccess] = useState(true);
  const [blogId, setBlogId] = useState(""); // or pass via props
  const params = useParams() || {};
  const slug = params?.slug;
  const [post, setPost] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [commentError, setCommentError] = useState("");

  // all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:1337/api/coderinas?populate=*"
      );
      const data = await response.json();

      if (response.ok) {
        setBlogs(data.data);
      } else {
        console.log("Failed to fetch blogs:", data.message);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateViewsAndFetchPost = async () => {
      if (!slug) return;

      try {
        // Increment views
        await fetch(`${API_URL}/api/coderinas/${slug}/increment-views`, {
          method: "PUT",
        });

        // Then fetch full post with populated data
        const res = await fetch(
          `${API_URL}/api/coderinas?filters[slug][$eq]=${slug}&populate=*`
        );
        const data = await res.json();
        setPost(data.data[0]);
      } catch (err) {
        console.error("Error updating views and fetching post:", err);
      }
    };

    updateViewsAndFetchPost();
  }, [slug]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("commenterName");
    const savedEmail = localStorage.getItem("commenterEmail");
    const savedWebsite = localStorage.getItem("commenterWebsite");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedWebsite) setWebsite(savedWebsite);
  }, []);

  const handleComments = async (e) => {
    e?.preventDefault?.();

    let hasError = false;

    // Reset all errors before validation
    setNameError("");
    setEmailError("");
    setCommentError("");

    if (!name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      hasError = true;
    }

    if (!comment.trim()) {
      setCommentError("Please write your comment.");
      hasError = true;
    }

    if (hasError) {
      setSuccess(false);
      return;
    }

    setLoading(true);
    setIsMessage("");
    setSuccess(true);

    try {
      const response = await fetch(`${API_URL}/api/coderina-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name,
            email,
            website,
            comment,
            vweblogs: blogId, // this should be a relation field in Strapi
          },
        }),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        setIsMessage(errorResult.error?.message || "Failed to submit comment.");
      }
      console.log("Submitting comment with values:", {
        name,
        email,
        comment,
        blogId,
      });
      console.error("Submission success");
      setIsMessage("Comment submitted!");
      setSuccess(true);
      setName("");
      setEmail("");
      setWebsite("");
      setComment("");
      setAgreed(false);

      setTimeout(() => {
        setIsMessage("");
      }, 5000);
    } catch (err) {
      console.error("Submission Error:", err);
      setIsMessage("Network issue, please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveInfo = () => {
    if (event.target.checked) {
      localStorage.setItem("commenterName", name);
      localStorage.setItem("commenterEmail", email);
      localStorage.setItem("commenterWebsite", website);
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const seconds = Math.floor((now - postDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;

    return postDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredPosts = blogs.filter((post) => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerTerm) ||
      (typeof post.content === "string" &&
        post.content.toLowerCase().includes(lowerTerm)) ||
      post.categories?.some(
        (cat) => cat?.name && cat.name.toLowerCase().includes(lowerTerm)
      )
    );
  });

  // archives

  const archiveDates = Array.from(
    new Set(
      blogs.map((post) => {
        const date = new Date(post.createdAt); // adjust this field if different
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${year}/${month}`;
      })
    )
  ).sort((a, b) => (a > b ? -1 : 1)); // Sort in descending order

  return (
    <PostContext.Provider
      value={{
        blogs,
        loading,
        fetchBlogs,
        currentPost,
        handleSaveInfo,
        searchTerm,
        setSearchTerm,
        archiveDates,
        filteredPosts,
        post,
        blogId, // ✅ make blogId available to other components
        name,
        setName,
        email,
        setEmail,
        comment,
        setComment,
        website,
        setWebsite,
        formatTime,
        isMessage,
        setIsMessage,
        isSuccess,
        setSuccess,
        handleComments,
        error,
        agreed,
        setAgreed,
        nameError,
        emailError,
        commentError,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
