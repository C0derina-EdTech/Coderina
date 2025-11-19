"use client";

import React from "react";
 
 export const EventSkeleton = () => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-6">
      <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
        {/* Date Skeleton */}
        <div className="flex flex-col items-center bg-gray-200 rounded-lg p-4 min-w-[80px] h-24 animate-pulse">
          <div className="w-12 h-8 bg-gray-300 rounded mb-2"></div>
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Event Info Skeleton */}
        <div className="space-y-3">
          <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          <div className="flex gap-3 mt-4">
            <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full md:w-64 h-48 md:h-40 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );



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