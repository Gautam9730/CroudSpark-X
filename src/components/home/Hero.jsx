// src/components/home/Hero.jsx
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Fuel Ideas. Fund Dreams.</h1>
      <p className="text-lg max-w-xl mb-8">
        Launch and support campaigns that change lives.
      </p>
      <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-slate-200 transition">
        Start a Campaign
      </button>
    </section>
  );
}
