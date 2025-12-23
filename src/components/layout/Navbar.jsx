export default function Navbar() {
     return (
       <nav className="flex items-center justify-between px-10 py-4 bg-slate-900 text-white">
         <h2 className="text-xl font-bold">CroudSpark-X</h2>
         <div className="space-x-6">
           <a href="/" className="hover:text-blue-400">Home</a>
           <a href="/campaigns" className="hover:text-blue-400">Campaigns</a>
           <a href="/auth/login" className="hover:text-blue-400">Login</a>
         </div>
       </nav>
     );
   }
   