"use client";
import toast, { Toaster } from "react-hot-toast";
import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [success, setSuccess] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [deleting, setDeleting] = useState(null); // Track the ID being deleted
  const [selectAll, setSelectAll] = useState(false);
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [messages, setMessages] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventToDelete, setEventToDelete] = useState(null); 
  const [bootCamp, setBootCamp] = useState([]);
  const [robotics, setRobotics] = useState([]);
 

  const [selected, setSelected] = useState(null);
  // for programs

  const initialFormState = {
    section: "FLL",
    FLL: {
      category: [],
      coaches: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      students: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      institutionName: "",
      teamName: "",
      termsAccepted: false,
    },
    COUCH: {
      coaches: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      students: [
        { name: "", surname: "", gender: "", level: "", email: "", phone: "" },
      ],
      institutionName: "",
      teamName: "",
      termsAccepted: false,
    },
    ACC: {
      coaches: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      students: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      institutionName: "",
      teamName: "",
      termsAccepted: false,
    },
    ACW: {
      coaches: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      students: [{ name: "", surname: "", gender: "", email: "", phone: "" }],
      institutionName: "",
      teamName: "",
      termsAccepted: false,
    },
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required.");
      setIsSuccess(false);
      return;
    }

    if (!agreed) {
      setMessage("Please agree to receive updates before subscribing.");
      setIsSuccess(false);
      return;
    }
    setLoading(true);
    setMessage("");
    setIsSuccess(true);

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
        setName("");
        setIsSuccess(true);
        setAgreed(false);
      } else {
        setMessage(data.error || "Subscription failed.");
        setIsSuccess(false);
      }
    } catch (err) {
      console.error("Subscription Error:", err);
      setMessage("An unexpected error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  // Handle selecting a specific subscriber
  const handleSubscriberSelect = (email) => {
    setSelectedSubscribers((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  // Handle selecting all subscribers
  const handleSelectAll = () => {
    if (selectedSubscribers.length === subscribers.length) {
      setSelectedSubscribers([]);
    } else {
      setSelectedSubscribers(subscribers.map((s) => s.email));
    }
  };

  // Fetch subscribers
  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/subscribers", { method: "GET" });

      const data = await res.json();

      if (data.success) {
        if (Array.isArray(data.subscribers)) {
          setSubscribers(data.subscribers);
        }
      } else {
        toast.error("Failed to fetch subscribers");
      }
    } catch (error) {
      console.log("🔥 Error fetching subscribers:", error);
      toast.error("Error fetching subscribers");
    } finally {
      setLoading(false);
    }
  };

  // Delete subscriber
  const deleteSubscriber = async (id) => {
    setLoading(true);
    try {
      setDeleting(id); // Set the deleting ID
      const res = await fetch("/api/subscribers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Subscriber deleted successfully");
        setSubscribers((prev) =>
          prev.filter((subscriber) => subscriber._id !== id)
        );
      } else {
        toast.error(data.message || "Failed to delete subscriber");
      }
    } catch (error) {
      toast.error("Error deleting subscriber");
    } finally {
      setDeleting(null); // Reset the deleting ID
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // fetch messages

  // ✅ Fetch messages from API
  const fetchMessages = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", { method: "GET" });

      const data = await res.json();

      if (data.success) {
        setMessages(data.data);
      } else {
        toast.error("Failed to fetch messages");
        console.log("❌ Backend responded with success: false", data);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete message by ID
  const deleteMessage = async (id) => {
    try {
      setLoadingId(id);
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message deleted successfully");
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        toast.error(data.message || "Failed to delete message");
      }
    } catch (error) {
      toast.error("Error deleting message");
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  //  fetch events

  // ✅ Fetch events from API
  const fetchEvents = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/events", { method: "GET" });

      const data = await res.json();

      if (data.success) {
        setEvents(data.data);
      } else {
        toast.error("Failed to fetch messages");
        console.log("❌ Backend responded with success: false", data);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // delete event

  const handleDelete = async (id) => {
    setDeleting(id);
    if (eventToDelete) {
      try {
        const response = await fetch(`/api/events?id=${eventToDelete}`, {
          method: "DELETE",
        });
        const data = await response.json();
        if (data.success) {
          setEvents(events.filter((event) => event._id !== eventToDelete));
        } else {
          console.error("Failed to delete event:", data.message);
        }
      } catch (error) {
        console.error("Error deleting event:", error.message);
      } finally {
        setDeleting(null); // Reset the deleting ID
        setIsModalOpen(false);
        setEventToDelete(null);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  // robotics form fetching

  const fetchRobotics = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/fll");
      const data = await res.json();
      if (data.success) {
        setRobotics(data.data);
      } else {
        toast.error("Failed to fetch registrations");
      }
    } catch {
      toast.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRobotics();
  }, []);


  const deleteRobotics = async (id) => {
    try {
      setLoadingId(id);
      const res = await fetch("/api/fll", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setRobotics((prev) => prev.filter((item) => item._id !== id));
        toast.success("Deleted successfully");
      } else {
        toast.error("Failed to delete");
      }
    } catch {
      toast.error("Error deleting registration");
    } finally {
      setLoadingId(null);
    }
  };



   // ✅ Fetch bootcampform from API
   const fetchBootcamp = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/bootcamp", { method: "GET" });

      const data = await res.json();

      if (data.success) {
        setBootCamp(data.data);
      } else {
        toast.error("Failed to fetch messages");
        console.log("❌ Backend responded with success: false", data);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBootcamp();
  }, []);
  // handle contact

  const handleContact = async (e) => {
    e?.preventDefault?.();

    let hasError = false;

    // Reset all errors before validation
    setNameError("");
    setEmailError("");
    setMessageError("");

    if (!name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      hasError = true;
    }

    if (!userMessage.trim()) {
      setMessageError("Please write your message.");
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          reason,
          message: userMessage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsMessage(data.message || "Message sent successfully!");
        setEmail("");
        setName("");
        setUserMessage("");
        setSubject(""); // ✅ clear the subject input
        setReason("");
        setSuccess(true);

        // Clean up URL
        window.history.replaceState(null, "", "/contact");
      } else {
        setIsMessage(data.error || "Failed to send message.");
        setSuccess(false);
      }
    } catch (err) {
      console.error("Contact Error:", err);
      setIsMessage("Network issue, Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  // blog form

  useEffect(() => {
    if (isMessage) {
      const timer = setTimeout(() => setIsMessage(""), 60000);
      return () => clearTimeout(timer);
    }
  }, [isMessage, setIsMessage]);

  const closeModal = () => setIsModalOpen(false);

  // programs

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const handleSectionChange = (newSection) => {
    setFormData((prevData) => ({
      ...prevData,
      section: newSection,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      const keys = name.split(/\.|\[|\]/).filter(Boolean);
      let newData = { ...prevData };
      let current = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) {
          current[key] = isNaN(keys[i + 1]) ? {} : [];
        }
        current = current[key];
      }

      const lastKey = keys[keys.length - 1];
      current[lastKey] = type === "checkbox" ? checked : value;

      return newData;
    });
  };

  const validateForm = () => {
    const section = formData.section;
    const activeData = formData[section];

    // Ensure coaches and students are always initialized
    const coaches = activeData?.coaches || [];
    const students = activeData?.students || [];

    // Specific checks for sections that require institution and team name
    if (["FLL", "COUCH", "ACC", "ACW"].includes(section)) {
      // Clear previous modal message to avoid undefined showing
      setModalMessage("");

      if (!activeData.institutionName || !activeData.teamName) {
        setModalMessage("Institution and team name are required.");
        setIsModalOpen(true);
        console.log(
          "Validation failed: Institution and team name are required."
        );
        return; //{ isValid: false };
      }
    }

    // Specific checks for students
    if (["FLL", "COUCH", "ACC", "ACW"].includes(section)) {
      if (students.length < 5) {
        setModalMessage("At least 5 students are required.");
        setIsModalOpen(true);
        console.log("At least 5 students are required..");
        return; //{ isValid: false };
      }
    }

    if (["FLL", "COUCH", "ACC", "ACW"].includes(section)) {
      if (!activeData.termsAccepted) {
        setModalMessage("Please accept the terms and conditions.");
        setIsModalOpen(true);
        console.log("Please accept the terms and conditions.");
        return; //{ isValid: false };
      }
    }

    // Validate coaches' gender (default to 'Male' if missing)
    coaches.forEach((coach, index) => {
      if (!coach.gender) {
        coaches[index].gender = "Male"; // Set to Male if empty
      }
    });

    // Validate students' gender (default to 'Male' if missing)
    students.forEach((student, index) => {
      if (!student.gender) {
        students[index].gender = "Male"; // Set to Male if empty
      }
    });

    // Ensure category is set (default to "FIRST® LEGO® League Discover")
    if (!activeData.category) {
      activeData.category = []; // Set default category if empty
    }

    // Update form data with modified activeData
    setFormData((prev) => ({
      ...prev,
      [section]: activeData,
    }));

    return { isValid: true };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const section = formData.section; // Current active section
    const activeData = formData[section];
    console.log("Submitting section:", formData.section);
    console.log("Form Data before submit:", formData);
    console.log("Active Section:", section);
    console.log("Active Data:", activeData);

    // Validate form before submitting
    const validationResult = validateForm();
    if (!validationResult.isValid) {
      alert(validationResult.message); // Show user-friendly error
      setLoading(false);
      return;
    }

    try {
      // Prepare the payload
      const payload = {
        section,
        [section]: activeData,
      };

      console.log("Submitting Payload:", payload);

      // Submit form data to the API
      const response = await fetch("/api/formData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // Send data as JSON
      });

      console.log("Response Status:", response.status);

      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json(); // Get the error message
        console.log("Backend error response:", errorData);
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorData.message}`
        );
      }

      // Parse JSON response
      const data = await response.json();
      console.log("Backend Response Data:", data);

      if (data.success) {
        // Success feedback and reset
        toast.success(`${section} submitted successfully!`);
        setFormData({
          section: "FLL",

          FLL: {
            category: [],
            coaches: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            students: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            institutionName: "",
            teamName: "",
            termsAccepted: false,
          },
          COUCH: {
            coaches: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            students: [
              {
                name: "",
                surname: "",
                gender: "",
                level: "",
                email: "",
                phone: "",
              },
            ],
            institutionName: "",
            teamName: "",
            termsAccepted: false,
          },
          ACC: {
            coaches: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            students: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            institutionName: "",
            teamName: "",
            termsAccepted: false,
          },
          ACW: {
            coaches: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            students: [
              { name: "", surname: "", gender: "", email: "", phone: "" },
            ],
            institutionName: "",
            teamName: "",
            termsAccepted: false,
          },
        });
        setFormErrors({});
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      toast.error(`Failed to submit ${section}. Please try again.`);
    } finally {
      setLoading(false); // Ensure the loading state is reset
    }
  };

  const addCoach = () => {
    const section = formData.section;
    const sectionData = formData[section];
    if (sectionData.coaches.length < 2) {
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          coaches: [
            ...prevData[section].coaches,
            { name: "", surname: "", email: "", gender: "", phone: "" },
          ],
        },
      }));
    } else {
      alert("You can only add up to 2 coaches.");
    }
  };

  const addEntry = (key) => {
    const section = formData.section;
    const newEntry = {
      name: "",
      surname: "",
      email: "",
      gender: "",
      phone: "",
      ...(key === "students" && { level: "" }),
    };

    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: [...prevData[section][key], newEntry],
      },
    }));
  };

  const addTeamMember = () => {
    const section = formData.section;
    const newStudent = {
      name: "",
      surname: "",
      email: "",
      gender: "",
      phone: "",
      level: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        students: [...prevData[section].students, newStudent],
      },
    }));
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

    const options = { year: "numeric", month: "long", day: "numeric" };
    return postDate.toLocaleDateString(undefined, options);
  };


  return (
    <FormContext.Provider
      value={{
        nameError,
        emailError,
        messageError,
        email,
        setEmail,
        name,
        setName,
        subject,
        setSubject,
        reason,
        setReason,
        loading,
        handleSubscribe,
        message,
        messages,
        isMessage,
        isSuccess,
        success,
        isModalOpen,
        closeModal,
        agreed,
        setAgreed,
        userMessage,
        setUserMessage,
        handleContact,
        formData,
        formErrors,
        isModalOpen,
        modalMessage,
        addTeamMember,
        setFormData,
        handleChange,
        handleSectionChange,
        handleCloseModal,
        validateForm,
        handleFormSubmit,
        addCoach,
        addEntry,
        subscribers,
        setSubscribers,
        deleting,
        deleteSubscriber,
        selectedSubscribers,
        handleSelectAll,
        handleSubscriberSelect,
        fetchMessages,
        deleteMessage,
        loadingId,
        fetchEvents,
        events,
        handleDelete,
        setDeleting,
        setIsModalOpen,
        eventToDelete,
        setEventToDelete,
        formatTime,
        fetchBootcamp,
        bootCamp,
        robotics,
    selected,
    setSelected,
    fetchRobotics,
    deleteRobotics,
      }}
    >
      <Toaster />
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
