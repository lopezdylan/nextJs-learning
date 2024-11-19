import { draftMode } from "next/headers";
import { getAllPosts } from "../lib/api";
import MoreStories from "../more-stories";

export const dynamic = "force-dynamic";

const fetchPosts = async () => {
    const { isEnabled } = await draftMode();
    const allPosts = await getAllPosts(isEnabled);

    return allPosts;
}

export default async function Page() {
    const allPosts = await fetchPosts();


    return (
        <div>
            <MoreStories morePosts={allPosts} />
        </div>
    );
}
