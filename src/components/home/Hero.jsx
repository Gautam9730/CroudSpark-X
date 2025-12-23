export default function Hero() {
     return (
       <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-6">
         <h1 className="text-5xl font-bold mb-4">
           Fuel Ideas. Fund Dreams.
         </h1>
         <p className="text-lg max-w-xl mb-8">
           Launch and support campaigns that change lives.
         </p>
         <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-slate-200 transition">
           Start a Campaign
         </button>
       </section>
     );
   }
   