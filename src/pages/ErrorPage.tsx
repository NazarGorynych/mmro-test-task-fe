import { useDocumentTitle } from "@hooks/index";
import { useRouteError } from "react-router-dom";

interface ErrorWithMessage {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  useDocumentTitle("Error | Auction");

  const error = useRouteError() as ErrorWithMessage;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export { ErrorPage };
