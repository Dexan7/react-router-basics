import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred</h1>
        <h1>Could not find this page!</h1>
      </main>
    </>
  )
};

export default ErrorPage;