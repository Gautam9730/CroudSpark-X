export default function CampaignSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow animate-pulse overflow-hidden">
            <div className="h-48 bg-slate-200" />
            <div className="p-4 space-y-3">
                <div className="h-4 bg-slate-200 w-1/3 rounded" />
                <div className="h-5 bg-slate-200 w-3/4 rounded" />
                <div className="h-2 bg-slate-200 rounded" />
                <div className="h-9 bg-slate-200 rounded mt-3" />
            </div>
        </div>
    );
}
