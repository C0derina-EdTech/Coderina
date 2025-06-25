"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Stack, Typography, Grid } from "@mui/material";

import { AiOutlineCalendar } from "react-icons/ai";
import { TbClockHour3 } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const EventPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const themeContext = useTheme();
  const { events, loading } = themeContext || {};

  useEffect(() => {
    if (!events || !events?.length) return;

    // Current date in Nigeria's timezone
    const now = new Date();
    const offset = 1 * 60 * 60 * 1000; // UTC+1 offset for Nigeria
    const nigeriaTime = new Date(now.getTime() + offset);

    // Categorize events based on startDate
    const upcoming = events?.filter((event) => {
      const eventDate = new Date(event.endDate); // Use endDate for comparison
      return eventDate >= nigeriaTime;
    });

    const past = events?.filter((event) => {
      const eventDate = new Date(event.endDate); // Use endDate for comparison
      return eventDate < nigeriaTime;
    });

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events]);

  // Filter events by search query (search by title or date)
  const filteredEvents = (events) =>
    events.filter(
      (event) =>
        (event?.title?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (event?.date?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className=" col-span-full">
          <div className="w-6 h-6 border-2 border-color border-t-transparent rounded-full animate-spin motion-safe:animate-bounce-slow" />
        </div>
      </div>
    );
  }

  return (
    <Box className="event__container py-[3rem] md:py-[6rem]">
      {!events || !events.length ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600 text-lg font-semibold">
            There is no event yet.
          </p>
        </div>
      ) : (
        <div className="space-y-[4rem] md:space-y-[8rem] px-2 md:px-4 lg:px-16">
          {/* Upcoming Events */}
          <Stack>
            <Stack
              className="event__upcoming mb-10"
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 0, md: 4 }}
              align="center"
              justify="space-between"
            >
              <Typography variant="h4">Upcoming Events</Typography>
              <form>
                <input
                  width={{ xs: "100%", md: "300px" }}
                  type="text"
                  style={{ borderRadius: "2em" }}
                  prefix={<FiSearch />}
                  placeholder="Search for events by title or date"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </Stack>
            {upcomingEvents.length ? (
              <Grid container justifyContent={"space-between"} gap={2.2}>
                {filteredEvents(upcomingEvents).map((card, i) => (
                  <Grid key={i} size={{ xs: 12, md: 5.9 }}>
                    <Card className="event__card">
                      <CardContent>
                        <Stack className="event__grid">
                          <Stack bgcolor={card.color}></Stack>
                          <Stack>
                            <Stack color={card.color}>
                              <Typography fontSize={{ xs: "12px", md: "14px" }}>
                                <AiOutlineCalendar />
                                <p>{card.startDate}</p> <p>- {card.endDate}</p>
                              </Typography>
                              <Typography fontSize={{ xs: "12px", md: "14px" }}>
                                <TbClockHour3 />
                                <p>{card.startTime}</p> <p>- {card.endTime}</p>
                              </Typography>
                            </Stack>
                            <Stack>
                              <Typography
                                variant="h6"
                                fontSize={{ xs: "22px", md: "28px" }}
                              >
                                {card.title}
                              </Typography>
                              <Typography fontSize={{ xs: "12px", md: "14px" }}>
                                {card.location}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div className="flex justify-center items-center py-10">
                <p className="text-gray-600 text-lg font-semibold">
                  No upcoming events yet.
                </p>
              </div>
            )}
          </Stack>

          {/* Past Events */}
          <Stack>
            <Stack className="event__upcoming mb-10">
              <Typography variant="h4">Past Events</Typography>
              <Stack></Stack>
            </Stack>
            <Grid container justifyContent={"space-between"} gap={2.2}>
              {filteredEvents(pastEvents).map((card, index) => (
                <Grid key={index} size={{ xs: 12, md: 5.9 }}>
                  <Card className="event__card">
                    <CardContent>
                      <Stack className="event__grid">
                        <Stack bgcolor={card.color}></Stack>
                        <Stack>
                          <Stack color={card.color}>
                            <Typography fontSize={{ xs: "12px", md: "14px" }}>
                              <AiOutlineCalendar />
                              <p>{card.startDate}</p> <p>- {card.endDate}</p>
                            </Typography>
                            <Typography fontSize={{ xs: "12px", md: "14px" }}>
                              <TbClockHour3 />
                              {card.startTime} - {card.endTime}
                            </Typography>
                          </Stack>
                          <Stack>
                            <Typography
                              variant="h6"
                              fontSize={{ xs: "22px", md: "28px" }}
                            >
                              {card.title}
                            </Typography>
                            <Typography fontSize={{ xs: "12px", md: "14px" }}>
                              {card.location}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </div>
      )}
    </Box>
  );
};

export default EventPage;
