import React from 'react';
import { TEAM_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-black text-charcoal-gray dark:text-white mb-6">About Us</h2>
            <p className="text-2xl md:text-3xl font-poppins text-golden-beige mb-8 italic">
                “We don’t just take photos; we craft timeless stories.”
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Founded by Mr. Chinnababu Garu (Ranga Surya) with over 30 years of experience in photography, our studio is a collective of passionate storytellers who live and breathe photography and cinematography. We believe every moment has a story waiting to be told, and our mission is to capture that narrative with artistic vision and technical excellence. Based in Hyderabad and serving across Andhra Pradesh and Telangana, we travel to document your most cherished memories.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_DATA.map(member => (
                <div key={member.name} className="group text-center">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={member.imageSrc} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                         <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-charcoal-gray dark:text-white mt-4">{member.name}</h3>
                    <p className="text-golden-beige mb-2">{member.role}</p>
                    {member.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.description}</p>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;