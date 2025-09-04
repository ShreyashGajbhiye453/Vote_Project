import ElectionDetail from "../../../components/ElectionDetails";
import { elections as initialElections } from "@/lib/elections";


export default function ElectionPage({ params }: { params: { id: string } }) {
const election = initialElections.find((e) => e.id === params.id);
if (!election) return <p className="p-6">Election not found</p>;
return <ElectionDetail election={election} />;
}
