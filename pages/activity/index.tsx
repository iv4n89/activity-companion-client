import { ActivityCard } from "@/components/activity/ActivityCard";
import { ActivityCardsContainer } from "@/components/activity/ActivityCardsContainer";
import ActivityForm from "@/components/activity/ActivityForm";
import { Base } from "@/Temp/Base/Base";


export default function ActivityIndex() {
    return (
        <Base>
            <div>
                <ActivityCardsContainer />
            </div>
        </Base>
    )
}