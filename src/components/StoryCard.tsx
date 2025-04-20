
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface StoryCardProps {
  id: string;
  title: string;
  author: {
    name: string;
    id: string;
  };
  coverImage: string;
  description: string;
  chapterCount?: number;
  size?: "small" | "medium" | "large" | "featured";
}

const StoryCard = ({
  id,
  title,
  author,
  coverImage,
  description,
  chapterCount = 1,
  size = "medium",
}: StoryCardProps) => {
  const sizeClasses = {
    small: "w-[180px] h-[260px]",
    medium: "w-[240px] h-[340px]",
    large: "w-[280px] h-[400px]",
    featured: "w-full h-[500px] md:h-[600px]",
  };

  return (
    <div className={`story-card ${sizeClasses[size]} relative group`}>
      <img
        src={coverImage}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="story-card-hover group-hover:opacity-100">
        <h3 className="story-title">{title}</h3>
        <p className="story-author">by {author.name}</p>
        <p className="story-description">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-300 flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            {chapterCount} {chapterCount === 1 ? "chapter" : "chapters"}
          </span>
          <Link to={`/story/${id}`}>
            <Button size="sm" variant="secondary">
              Read
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
