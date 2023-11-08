const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TodoTrac</h1>
      <div className="links">
        {/* <a href="/">Home</a> */}
        <h2 className="tag-line"> Your Tasks, Your Terms!!!</h2>
        <a href="/">Logout</a>
       
        {/* <a href="/signup">Signup</a> */}
      </div>
    </nav>
  );
};


export default Navbar;