interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
  }
  
  export default function Card({
    title,
    subtitle,
    description,
    imageUrl,
    link,
  }: CardProps) {
    return (
      <div className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
        {description && <p className="mt-2">{description}</p>}
        {link && (
          <a
            href={link}
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Voir plus
          </a>
        )}
      </div>
    );
  }
  