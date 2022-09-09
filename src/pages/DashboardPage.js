import { useAuth0 } from "@auth0/auth0-react";

export const DashboardPage = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <p>Checking session...</p>;
  }

  return (
    isAuthenticated && (
      <>
        <p>Welcome {user.name}!</p>

        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </>
    )
  );
};
