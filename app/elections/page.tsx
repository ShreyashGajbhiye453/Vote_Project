import ElectionCard from "../../components/ElectionCard";
import { elections as initialElections } from "@/lib/elections";


export default function ElectionsPage() {
return (
<div>
<h1 className="text-2xl font-bold mb-4">Elections</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{initialElections.map((e) => (
<ElectionCard key={e.id} election={e} />
))}
</div>
</div>
);
}