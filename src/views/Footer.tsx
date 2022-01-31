function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_content">
        <p className="footer_text">
          Copyright <strong>&copy;</strong>{" "}
          Properties Inc. { year } All rights reserverd
        </p>
      </div>
    </footer>
  );
}

export { Footer };
