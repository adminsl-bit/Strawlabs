"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";


export interface ArticleCardProps {
    headline: string;
    excerpt: string;
    cover?: string;
    tag?: string;
    readingTime?: number; // in seconds
    writer?: string;
    publishedAt?: Date;
    clampLines?: number;
}

// Human-friendly read time: seconds -> "X min read"
export function formatReadTime(seconds: number): string {
    if (!seconds || seconds < 60) return "Less than 1 min read";
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} min read`;
}

// Date -> "Aug 15, 2025" (localized but concise)
export function formatPostDate(date: Date): string {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    cover,
    tag,
    readingTime,
    headline,
    excerpt,
    writer,
    publishedAt,
    clampLines,
}) => {
    const hasMeta = tag || readingTime;
    const hasFooter = writer || publishedAt;

    return (
        <Card className="flex w-full max-w-sm flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm p-3 shadow-lg hover:border-white/20 transition-colors">
            {cover && (
                <CardHeader className="p-0">
                    <div className="relative h-56 w-full">
                        <Image
                            src={cover}
                            alt={headline}
                            fill
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </CardHeader>
            )}

            <CardContent className="flex-grow p-3 text-left">
                {hasMeta && (
                    <div className="mb-4 flex items-center text-sm text-neutral-400">
                        {tag && (
                            <Badge className="rounded-full bg-neutral-800 border-neutral-700 px-3 py-1 text-sm text-neutral-300 hover:text-white hover:bg-neutral-700">
                                {tag}
                            </Badge>

                        )}
                        {tag && readingTime && <span className="mx-2 text-neutral-600">•</span>}
                        {readingTime && <span className="text-neutral-500 font-light">{formatReadTime(readingTime)}</span>}
                    </div>
                )}

                <h2 className="mb-2 text-2xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
                    {headline}
                </h2>

                <p
                    className={cn("text-neutral-400 font-light text-sm line-clamp-3", {
                        "overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box]":
                            clampLines && clampLines > 0,
                    })}
                    style={clampLines ? {
                        WebkitLineClamp: clampLines,
                    } : undefined}
                >
                    {excerpt}
                </p>
            </CardContent>

            {hasFooter && (
                <CardFooter className="flex items-center justify-between p-3 border-t border-white/5 mt-auto">
                    {writer && (
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">By</p>
                            <p className="font-semibold text-neutral-300 text-sm">{writer}</p>
                        </div>
                    )}
                    {publishedAt && (
                        <div className={writer ? "text-right" : ""}>
                            <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-0.5">Published</p>
                            <p className="font-semibold text-neutral-300 text-sm">
                                {formatPostDate(publishedAt)}
                            </p>
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    );
};
