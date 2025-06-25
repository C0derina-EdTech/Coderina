"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // events
  const [upCard, setUpCard] = useState([]);
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  // subscribe

  const [isOpen, setIsOpen] = useState(false);

  // Robotics form

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    parentEmail: "",
    studentEmail: "",
    age: "",
    program: "",
    grade: "",
    gender: "",
    address: "",
    device: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Submitting...");

    try {
      const response = await fetch("/api/fll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Registration Successful!", { id: toastId });
      setFormData({
        studentName: "",
        studentEmail: "",
        parentName: "",
        parentEmail: "",
        age: "",
        program: "",
        grade: "",
        gender: "",
        address: "",
        device: "",
        phone: "",
      });
    } catch (error) {
      toast.error("Error submitting form", { id: toastId });
    }

    setLoading(false);
  };

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        if (response.ok) {
          setUpCard(data.data); // Assuming API response is structured as { data: [...] }
        } else {
          console.log("Failed to fetch events:", data.message);
        }
      } catch (error) {
        console.log("Error fetching events:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        if (data.success) {
          const sortedEvents = data.data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );

          setEvents(sortedEvents);
          setUpcomingEvents(upcoming);
          setPastEvents(past);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  //delete events

  const deleteEvent = async () => {
    if (eventToDelete) {
      setDeleting(eventToDelete);
      try {
        const response = await fetch(`/api/events?id=${eventToDelete}`, {
          method: "DELETE",
        });
        const data = await response.json();
        if (data.success) {
          setEvents((prev) => prev.filter((e) => e._id !== eventToDelete));
        } else {
          console.error("Failed to delete event:", data.message);
        }
      } catch (error) {
        console.error("Error deleting event:", error.message);
      } finally {
        setDeleting(null);
        setIsModalOpen(false);
        setEventToDelete(null);
      }
    }
  };

  const toggleOptions = (id) => {
    setShowOptions((prev) => (prev === id ? null : id));
  };


  // modal

  useEffect(() => {
    // Automatically show modal on initial load
    setIsOpen(true);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <ThemeContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        events,
        loading,
        upCard,
        handleChange,
        handleSubmit,
        formData,
         deleting,
        isModalOpen,
        showOptions,
        eventToDelete,
        deleteEvent,
        toggleOptions,
        setIsModalOpen,
        setEventToDelete,
      }}
    >
      <Toaster />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
