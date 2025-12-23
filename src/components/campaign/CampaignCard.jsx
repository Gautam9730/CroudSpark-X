export default function CampaignCard({ campaign }) {
     const percent = Math.min(
          Math.round((campaign.raised / campaign.goal) * 100),
          100
        );
      
     return (
       <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
         <img
           src={campaign.image}
           alt={campaign.title}
           className="w-full h-48 object-cover"
         />
         <div className="p-4">
           <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
           <p className="text-sm text-slate-600 mb-4">
             {campaign.description}
           </p>
   
           <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
             <div
               className="bg-blue-600 h-2 rounded-full"
               style={{
                 width: `${(campaign.raised / campaign.goal) * 100}%`,
               }}
             />
           </div>
   
           <div className="flex justify-between text-sm text-slate-600">
             <span>₹{campaign.raised}</span>
             <span>Goal ₹{campaign.goal}</span>
           </div>
   
           <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
             Fund Now
           </button>
         </div>
       </div>
     );
   }
   