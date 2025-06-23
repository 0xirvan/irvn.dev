import type { CollectionEntry } from 'astro:content';
import { formatDate } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface Props {
  project: CollectionEntry<'projects'>;
  className?: string;
}

export const ProjectCard = ({ project, className }: Props) => {
  const { data } = project;
  
  return (
    <a 
      href={`/projects/${project.slug}`}
      className={cn(
        "block group relative overflow-hidden rounded-lg border border-border p-4 transition-all hover:border-foreground/20 hover:shadow-md",
        className
      )}
    >
      {data.image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={data.image} 
            alt={data.title}
            className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{data.title}</h3>
        
        {data.publishDate && (
          <div className="text-sm text-muted-foreground">
            {formatDate(data.publishDate)}
          </div>
        )}
        
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.tags.map(tag => (
              <span key={tag} className="bg-secondary text-xs px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}
        
        <p className="text-muted-foreground line-clamp-3">{data.description}</p>
      </div>
    </a>
  );
};
