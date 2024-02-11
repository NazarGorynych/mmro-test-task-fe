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
      <h1 className="text-black">Oops!</h1>
      <p className="text-block">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-black">{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export { ErrorPage };
