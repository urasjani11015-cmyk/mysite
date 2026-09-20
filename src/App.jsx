import React from "react";

export default function App() {
  const handleClick = () => {
    window.location.href = "https://rumfill.com/jtdyzwx9dp?key=6ceffee47be217154eecc6045d5bb044
";
  };

  return (
    <main className="page">
      <section className="card">
        <h1>My React Website</h1>

        <p>
          Welcome to my website.
        </p>

        <button onClick={handleClick}>
          Click Here
        </button>
      </section>
    </main>
  );
}
