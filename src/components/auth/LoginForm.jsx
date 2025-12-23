export default function LoginForm() {
     return (
       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
   
         <form className="space-y-4">
           <input
             type="email"
             placeholder="Email"
             className="w-full border rounded-md px-4 py-2"
           />
           <input
             type="password"
             placeholder="Password"
             className="w-full border rounded-md px-4 py-2"
           />
   
           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
             Login
           </button>
         </form>
   
         <p className="text-sm text-center text-slate-600 mt-4">
           Don’t have an account?{" "}
           <a href="/auth/register" className="text-blue-600 hover:underline">
             Register
           </a>
         </p>
       </div>
     );
   }
   