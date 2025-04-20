import React from 'react';
import ProjectShowcase from '../ProjectShowcase';

const ProjectShowcaseExample: React.FC = () => {
  // Example main image
  const mainImage = (
    <img 
      src="/images/blog-main.jpg" 
      alt="Life in Aix Blog" 
      className="w-full h-full object-cover"
      onError={(e) => {
        // Fallback image if the real one fails to load
        e.currentTarget.src = 'https://via.placeholder.com/600x800?text=Life+in+Aix';
      }}
    />
  );

  // Example small images
  const smallImage1 = (
    <img 
      src="/images/blog-mobile.jpg" 
      alt="Blog Mobile View" 
      className="w-full h-full object-cover"
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Mobile+View';
      }}
    />
  );

  const smallImage2 = (
    <img 
      src="/images/blog-stats.jpg" 
      alt="Blog Statistics" 
      className="w-full h-full object-cover"
      onError={(e) => {
        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Statistics';
      }}
    />
  );

  return (
    <div className="py-12">
      <ProjectShowcase
        mainImage={mainImage}
        smallImage1={smallImage1}
        smallImage2={smallImage2}
        title1="Responsive Design"
        description1="Fully responsive blog layout optimized for all devices with intuitive navigation."
        title2="+700% SEO traffic"
        description2="Significant increase in organic traffic through optimized content structure and metadata."
        mainImageOnRight={false}
      />
      
      {/* Example with reversed layout */}
      <div className="mt-16">
        <ProjectShowcase
          mainImage={mainImage}
          smallImage1={smallImage1}
          smallImage2={smallImage2}
          title1="Modern UI Components"
          description1="Clean, intuitive interface with custom-designed elements for better user experience."
          title2="Content Management"
          description2="Easy-to-use admin panel for managing blog posts, categories, and media."
          mainImageOnRight={true}
        />
      </div>
    </div>
  );
};

export default ProjectShowcaseExample;
