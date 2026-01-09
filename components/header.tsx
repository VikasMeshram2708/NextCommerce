export default function Header() {
  return (
    <header className="p-4 sticky top-0 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
          Next{" "}
          <span className="italic bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-orange-500 to-pink-600">
            Commerce
          </span>
        </h1>
      </div>
    </header>
  );
}
