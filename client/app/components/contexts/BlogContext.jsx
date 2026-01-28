"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { sanityClient } from "../lib/sanityClient"; // adjust path

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
   const [contacts, setContacts] = useState([]);
    const [submitting, setSubmiting] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [isSuccess, setSuccess] = useState(true);
  const [blogId, setBlogId] = useState("");
  const params = useParams() || {};
  const slug = params?.slug;
  const [post, setPost] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState(null);
  // const displayedPost = updatedPost || post;
// fetch all events

const fetchEvents = async () => {
  setLoading(true);
  try {
    const query = `*[_type == "coderinaevents"] | order(date desc){
  _id,
  title,
 
  date,
  endDate,
  status,
  time,
  location,
  isOnline,
  image {
    asset->{
      _id,
      url
    }
  },
  description,
  category,
  registrationLink,
  isPast,
  _createdAt
}`;

    const data = await sanityClient.fetch(query);
    setEvents(data);
    // console.log("Events fetched:", data);
  } catch (error) {
    console.error("Error fetching events from Sanity:", error);
    setError("Failed to load events");
  } finally {
    setLoading(false);
  }
};

  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const query = `*[_type == "coderinablog"] | order(_createdAt desc){
        _id,
        title,
        slug,
        readTime,
        content,
         image {
    asset->{
      _id,
      url
    }
  },
        links,
        comments,
        views,
        category,
        _createdAt
      }`;

      const data = await sanityClient.fetch(query);
      setBlogs(data);
      // console.log("data received", data);
    } catch (error) {
      console.error("Error fetching blogs from Sanity:", error); // show full error
      setError("Failed to load blogs");

      // console.log("Error fetching blogs from Sanity:", error);
    } finally {
      setLoading(false);
    }
  };


  // Fetch a single post by slug
  useEffect(() => {
    const fetchPostBySlug = async () => {
      if (!slug) return;

      try {
        const query = `*[_type == "coderinablog" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          readTime,
          content,
          image,
          links,
          comments,
          views,
          category,
          _createdAt
        }`;
        const data = await sanityClient.fetch(query, { slug });
        setPost(data);
      } catch (err) {
        console.error("Error fetching single post:", err);
      }
    };

    fetchPostBySlug();
  }, [slug]);

  useEffect(() => {
    fetchBlogs();
    fetchEvents();
  }, []);

  // views

   useEffect(() => {
    const updateViews = async () => {
      if (!post?.slug?.current) return;

      // 1. Increment view
      const res = await fetch(`/api/views/${post.slug.current}`, {
        method: "POST",
      });
      const data = await res.json();
      //console.log("Updated views response:", data);

      // 2. Refetch the updated post
      const response = await fetch(`/api/posts/${post.slug.current}`);
      const updatedPost = await response.json();

      // 3. Update the local post state if you have a setter
      // If your useBlogContext() supports updatePost(), use that
      if (updatedPost && updatedPost._id) {
        setUpdatedPost(updatedPost); // OR update context if available
      }
    };

    updateViews();
  }, [post?.slug?.current]);

  useEffect(() => {
    const savedName = localStorage.getItem("commenterName");
    const savedEmail = localStorage.getItem("commenterEmail");
    const savedWebsite = localStorage.getItem("commenterWebsite");

    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedWebsite) setWebsite(savedWebsite);
  }, []);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "instagramPost"] | order(_createdAt desc)[0...4] {
          title,
          link,
          "image": image.asset->url
        }`;
        const data = await sanityClient.fetch(query);
        setInstagramPosts(data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const handleComments = async (e) => {
    e?.preventDefault?.();

    setNameError("");
    setEmailError("");
    setCommentError("");

    let hasError = false;

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
    setSuccess(true);
    setIsMessage("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post?._id,
          name,
          email,
          website,
          comment,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit comment.");
      }

      setIsMessage("Comment submitted!");
      setSuccess(true);
      setName("");
      setEmail("");
      setWebsite("");
      setComment("");
      setAgreed(false);

      // Optionally: refresh post comments
      fetchBlogs(); // if you want to refresh everything
    } catch (err) {
      console.error("Submission Error:", err);
      setIsMessage(err.message || "Network issue, please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setIsMessage("");
      }, 5000);
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
      post.title?.toLowerCase().includes(lowerTerm) ||
      post.content?.toLowerCase().includes(lowerTerm) ||
      post.category?.toLowerCase().includes(lowerTerm)
    );
  });

  const archiveDates = Array.from(
    new Set(
      blogs.map((post) => {
        const date = new Date(post._createdAt);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${year}/${month}`;
      })
    )
  ).sort((a, b) => (a > b ? -1 : 1));

  return (
    <BlogContext.Provider
      value={{
        blogs,
        events,
        loading,
        fetchBlogs,
        currentPost,
        handleSaveInfo,
        searchTerm,
        setSearchTerm,
        archiveDates,
        filteredPosts,
        post,
        blogId,
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
        instagramPosts,
        updatedPost
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogContext = () => useContext(BlogContext);
