"use client";

import React from "react";
 
 export const EventSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e29818] via-transparent to-[#e29818]"></div>
        </div>

        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Featured Badge Skeleton */}
              <div className="inline-flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full h-9 w-40 animate-pulse"></div>

              {/* Date Badge and Title Skeleton */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 rounded-xl p-4 min-w-[80px] h-[88px] animate-pulse"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-12 bg-gray-700 rounded-lg w-full animate-pulse"></div>
                  <div className="h-12 bg-gray-700 rounded-lg w-4/5 animate-pulse"></div>
                </div>
              </div>

              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-6 bg-gray-700 rounded w-full animate-pulse"></div>
                <div className="h-6 bg-gray-700 rounded w-5/6 animate-pulse"></div>
              </div>

              {/* Event Details Skeleton */}
              <div className="flex flex-wrap gap-4">
                <div className="h-6 bg-gray-700 rounded w-32 animate-pulse"></div>
                <div className="h-6 bg-gray-700 rounded w-40 animate-pulse"></div>
              </div>

              {/* Buttons Skeleton */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="h-14 bg-gray-700 rounded-lg w-48 animate-pulse"></div>
                <div className="h-14 bg-gray-700 rounded-lg w-56 animate-pulse"></div>
              </div>
            </div>

            {/* Featured Image Skeleton */}
            <div className="relative h-[400px] lg:h-[600px] bg-gray-700 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section Skeleton */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Skeleton */}
            <div className="w-full md:w-96 h-12 bg-gray-200 rounded-lg animate-pulse"></div>

            {/* Category Filter Skeleton */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
              <div className="hidden md:flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-200 rounded-lg w-28 animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="md:hidden w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid Skeleton */}
      <section className="py-20 bg-white">
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="h-12 bg-gray-200 rounded-lg w-80 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden"
              >
                {/* Event Image Skeleton */}
                <div className="relative h-48 md:h-64 2xl:h-80 bg-gray-200 animate-pulse">
                  {/* Date Badge Skeleton */}
                  <div className="absolute top-4 left-4 bg-gray-300 rounded-lg p-3 min-w-[70px] h-[70px] animate-pulse"></div>
                  {/* Category Badge Skeleton */}
                  <div className="absolute top-4 right-4 bg-gray-300 rounded-full h-6 w-20 animate-pulse"></div>
                </div>

                {/* Event Content Skeleton */}
                <div className="p-6 space-y-4">
                  {/* Title Skeleton */}
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  </div>

                  {/* Description Skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>

                  {/* Event Details Skeleton */}
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded w-40 animate-pulse"></div>
                  </div>

                  {/* Button Skeleton */}
                  <div className="pt-4">
                    <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-20 bg-[#e29818]">
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-16 bg-orange-600 rounded-lg w-32 mx-auto mb-2 animate-pulse"></div>
                <div className="h-6 bg-orange-600 rounded w-24 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};



export function UpcomingEventsSkeletonLoader() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[130rem] mx-auto">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
          <div className="w-full sm:w-auto">
            {/* Badge skeleton */}
            <div className="inline-block bg-gray-800 h-6 w-24 rounded-full mb-3 animate-pulse"></div>
            {/* Title skeleton */}
            <div className="bg-gray-800 h-10 sm:h-12 md:h-14 w-64 sm:w-80 rounded-lg mb-2 animate-pulse"></div>
            {/* Description skeleton */}
            <div className="bg-gray-800 h-4 sm:h-5 w-48 sm:w-64 rounded animate-pulse"></div>
          </div>

          {/* Scroll Buttons Skeleton - Desktop */}
          <div className="hidden md:flex gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-gray-800 animate-pulse"></div>
            <div className="w-12 h-12 rounded-full border-2 border-gray-800 animate-pulse"></div>
          </div>
        </div>

        {/* Events Cards Skeleton */}
        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-hidden pb-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="relative h-48 sm:h-52 md:h-56 bg-gray-800 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Date Badge Skeleton */}
                <div className="absolute top-4 left-4 bg-gray-700 rounded-xl px-3 py-2 w-16 h-16 animate-pulse">
                  <div className="bg-gray-600 h-6 w-8 rounded mb-1"></div>
                  <div className="bg-gray-600 h-3 w-10 rounded"></div>
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="p-5 sm:p-6">
                {/* Title skeleton */}
                <div className="bg-gray-700 h-6 sm:h-7 w-full rounded mb-1 animate-pulse"></div>
                <div className="bg-gray-700 h-6 sm:h-7 w-3/4 rounded mb-4 animate-pulse"></div>
                
                {/* Time and Location Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                    <div className="bg-gray-700 h-4 w-32 rounded animate-pulse"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                    <div className="bg-gray-700 h-4 w-20 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Button Skeleton */}
                <div className="w-full bg-gray-700 h-12 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link Skeleton */}
        <div className="text-center mt-8 md:mt-10">
          <div className="inline-flex items-center">
            <div className="bg-gray-800 h-5 w-32 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}