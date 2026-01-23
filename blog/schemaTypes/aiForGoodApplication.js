import { defineField, defineType } from "sanity";

export default defineType({
  name: "aiForGoodApplication",
  title: "AI for Good – Team Applications",
  type: "document",

  fields: [
    /* =====================
       TEAM INFORMATION
    ====================== */
    defineField({
      name: "teamName",
      title: "Team Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Team name is required"),
    }),

    defineField({
      name: "schoolName",
      title: "School / Institution Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("School name is required"),
    }),

    defineField({
      name: "category",
      title: "Competition Category",
      type: "string",
      options: {
        list: [
          { title: "AI for Education", value: "education" },
          { title: "AI for Health", value: "health" },
          { title: "AI for Climate", value: "climate" },
          { title: "AI for Agriculture", value: "agriculture" },
          { title: "AI for Social Good", value: "social-good" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("Please select a category"),
    }),

    /* =====================
       STUDENTS
    ====================== */
    defineField({
      name: "students",
      title: "Team Members (Students)",
      type: "array",
      of: [
        defineType({
          name: "student",
          title: "Student",
          type: "object",
          fields: [
            defineField({
              name: "fullName",
              title: "Full Name",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Student name is required"),
            }),

            defineField({
              name: "gender",
              title: "Gender",
              type: "string",
              options: {
                list: [
                  { title: "Male", value: "male" },
                  { title: "Female", value: "female" },
                  { title: "Other", value: "other" },
                ],
              },
            }),

            defineField({
              name: "level",
              title: "Class / Level",
              type: "string",
              description: "e.g. JSS2, SSS1, 200 Level",
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(15)
          .error("A team can have a maximum of 15 students"),
    }),

    /* =====================
       COACHES
    ====================== */
    defineField({
      name: "coaches",
      title: "Team Coaches",
      type: "array",
      of: [
        defineType({
          name: "coach",
          title: "Coach",
          type: "object",
          fields: [
            defineField({
              name: "fullName",
              title: "Full Name",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Coach name is required"),
            }),

            defineField({
              name: "email",
              title: "Email Address",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .email()
                  .error("A valid email is required"),
            }),

            defineField({
              name: "phone",
              title: "Phone Number",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("Phone number is required"),
            }),

            defineField({
              name: "role",
              title: "Role",
              type: "string",
              initialValue: "Coach",
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(2)
          .error("Only a maximum of 2 coaches is allowed"),
    }),

    /* =====================
       PROJECT DETAILS
    ====================== */
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Project title is required"),
    }),

    defineField({
      name: "projectDescription",
      title: "Project Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .error("Please describe your project in detail"),
    }),


    /* =====================
       META
    ====================== */
    defineField({
      name: "createdAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "teamName",
      subtitle: "schoolName",
      status: "status",
    },
    prepare({ title, subtitle, projectDescription }) {
      return {
        title,
        subtitle: `${subtitle} • ${projectDescription}`,
      };
    },
  },
});
