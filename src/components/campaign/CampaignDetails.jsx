export default function CampaignDetails({ campaign }) {
     const percent = Math.min(
          Math.round((campaign.raised / campaign.goal) * 100),
          100
     );

     return (
          <section className="max-w-5xl mx-auto px-6 py-16">
               <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-96 object-cover rounded-xl mb-8"
               />

               <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
               <p className="text-slate-600 mb-6">{campaign.description}</p>

               <div className="w-full bg-slate-200 rounded-full h-3 mb-3">
                    <div
                         className="bg-blue-600 h-3 rounded-full"
                         style={{ width: `${percent}%` }}
                    />
               </div>

               <div className="flex justify-between text-sm text-slate-600 mb-8">
                    <span>₹{campaign.raised} raised</span>
                    <span>Goal ₹{campaign.goal}</span>
               </div>

               <a
                    href={`/campaigns/${campaign.id}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
               >
                    View Details
               </a>
          </section>
     );
}
