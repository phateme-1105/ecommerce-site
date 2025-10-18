import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="p-5 ">
      <h1 className="font-bold text-3xl pb-2 ">Oops...</h1>
      {isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}
    </div>
  );
};

export default ErrorPage;
