import React, { useState, useRef, useEffect } from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
    const [showFull, setShowFull] = useState(false);
    const charLimit = 60;
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("60px"); // initial truncated height

    const toggleDescription = () => setShowFull(!showFull);

    useEffect(() => {
        if (contentRef.current) {
            if (showFull) {
                // expand: use scrollHeight for full content
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
            } else {
                // collapse: back to truncated height
                setMaxHeight("60px");
            }
        }
    }, [showFull]);

    const truncatedDescription =
        description.length > charLimit ? description.slice(0, charLimit) + "..." : description;

    return (
        <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 flex flex-col min-h-[400px]">
            <img src={image} alt={title} loading="lazy" />
            <div className="dark:bg-dark-card p-4 flex flex-col justify-between flex-1">
                {/* Top Content */}
                <div>
                    <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>

                    {/* Animated Description */}
                    <div
                        ref={contentRef}
                        style={{ maxHeight }}
                        className="overflow-hidden transition-[max-height] duration-500 ease-in-out text-content pt-4 font-light"
                    >
                        {showFull ? description : truncatedDescription}
                    </div>

                    {description.length > charLimit && (
                        <button
                            onClick={toggleDescription}
                            className="text-blue-500 dark:text-blue-400 underline mt-1 font-light"
                        >
                            {showFull ? "See Less" : "See More"}
                        </button>
                    )}

                    <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
                        Tech Stack : <span className="font-light">{techstack}</span>
                    </h3>
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-between items-center mt-5">
                    {previewLink && (
                        <div className="flex items-center">
                            <a
                                href={previewLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline pl-2 font-light dark:text-white"
                            >
                                Visit Preview
                            </a>
                        </div>
                    )}
                    {githubLink && (
                        <div className="flex items-center">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline pl-2 font-light dark:text-white"
                            >
                                View Code
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default Project;
