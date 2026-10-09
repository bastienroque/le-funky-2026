import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto p-2 md:p-0">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
