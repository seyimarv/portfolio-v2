import React from 'react';

interface PerformanceCardProps {
  title: string;
  description: string;
  className?: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`flex items-center p-6 md:p-8 border border-secondary/20 rounded-2xl ${className}`}>
      <div className="mr-6 flex-shrink-0">
        <svg className="text-secondary" preserveAspectRatio="none" data-bbox="0.499 0 57.001 57" xmlns="http://www.w3.org/2000/svg" viewBox="0.499 0 57.001 57" height="57" width="58" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
          <g>
            <path d="M33.232 0h-8.465v18.28L11.847 5.362 5.86 11.347l12.92 12.92H.499v8.465h18.29L5.862 45.661l5.986 5.986 12.92-12.92V57h8.465V39.033l12.614 12.614 5.986-5.986-12.928-12.929H57.5v-8.465H38.912l12.92-12.92-5.986-5.986-12.614 12.614V0Z" clipRule="evenodd" fillRule="evenodd" fill="currentColor"></path>
          </g>
        </svg>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-grey">{description}</p>
      </div>
    </div>
  );
};

export default PerformanceCard;
