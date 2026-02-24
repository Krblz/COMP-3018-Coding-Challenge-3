export interface ApiResponse<T> {
    status: string /** The status of the response, e.g., 'success' or 'error'. */;
    data?: T /** The data returned in the response. */;
    message?: string /** A message providing additional information about the response. */;
    error?: string /** An error message, if applicable. */;
    code?: string /** An error code, if applicable. */;
}

export const successResponse = <T>(
    data?: T /** The data to include in the response. */,
    message?: string /** A message providing additional information about the response. */
): ApiResponse<T> => ({
    status: "success",
    data,
    message,
});