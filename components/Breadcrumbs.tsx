import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  to?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items.length) return null;

  return (
    <nav
      className="text-sm text-gray-500 dark:text-gray-400 mb-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              {index > 0 && (
                <span className="mx-1 text-gray-400 dark:text-gray-500">
                  &gt;
                </span>
              )}

              {isLast || (!item.to && !item.onClick) ? (
                <span className="font-medium text-charcoal-gray dark:text-gray-200">
                  {item.label}
                </span>
              ) : item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="hover:text-golden-beige transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.to as string}
                  className="hover:text-golden-beige transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;


