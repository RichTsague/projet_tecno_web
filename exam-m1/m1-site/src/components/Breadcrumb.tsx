import Link from 'next/link';

interface BreadcrumbProps {
  paths: { label: string; href: string }[];
}

export default function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-4">
      {paths.map((path, index) => (
        <span key={index}>
          <Link href={path.href} className="text-blue-500 hover:underline">
            {path.label}
          </Link>
          {index < paths.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
