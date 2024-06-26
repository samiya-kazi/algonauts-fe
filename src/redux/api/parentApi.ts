import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tag-types";

const PARENT_URL = "/parent";

export const parentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getParentbyUserId: build.query({
      query: (userId) => ({
        url: `${PARENT_URL}/user/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
    getStudentStats: build.query({
      query: (studentId) => ({
        url: `${PARENT_URL}/exercise-statistics/${studentId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.student, tagTypes.user],
    }),
  }),
});

export const { useGetParentbyUserIdQuery, useGetStudentStatsQuery } = parentApi;
