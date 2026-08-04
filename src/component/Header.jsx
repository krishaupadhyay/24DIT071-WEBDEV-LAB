// function Header({ name }) {
//   return (
//     <header className="header">
//       <h1>{name}</h1>
//       <p>Frontend Developer | React Enthusiast</p>
//     </header>
//   );
// }

// export default Header;

function Header({ themeColor }) {
  return (
    <header
      style={{
        backgroundColor: themeColor,
        color: "white",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <h1>My Portfolio</h1>
    </header>
  );
}

export default Header;