import { useStores } from "@hooks/index";
import { observer } from "mobx-react-lite";
// import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const LayoutProtectedRoute = observer(({ children }: any) => {
  const {
    auth: { user, isLoading }
  } = useStores();
  const location = useLocation();
  if (!user && !isLoading) {
    // Redirect to the login page if not logged in
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
});

export { LayoutProtectedRoute };
