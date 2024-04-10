import { NextResponse } from "next/server";
import urlMetadata from "url-metadata";

export interface IOpenGraphResponse {
    title: string;
    url: string;
    description: string;
    image: string;
}

/**
 * Route Handlers
 * GET : /api/og?url=~
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get("url") || "";

        const result: urlMetadata.Result = await urlMetadata(url, {
            cache: "force-cache",
        });

        const ogData: IOpenGraphResponse = {
            title: result["og:title"],
            url: result["og:url"],
            description: result["og:description"],
            image: result["og:image"] || result["image"],
        };

        return NextResponse.json(ogData, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
