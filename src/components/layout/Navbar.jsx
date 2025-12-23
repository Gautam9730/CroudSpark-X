export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-slate-900 text-white">
      <h1 className="text-xl font-bold">CroudSpark-X</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/campaigns" className="hover:text-blue-400">Campaigns</a>
        <a href="/auth/login" className="hover:text-blue-400">Login</a>
      </div>
    </nav>
  );
}
