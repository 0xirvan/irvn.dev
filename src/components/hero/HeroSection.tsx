import { profile } from "./profile";
import { Button } from "../ui/button";
import { Download, Github, Instagram, Linkedin } from "lucide-react";

export function HeroSection() {
    return (
        <section className="w-full py-12">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
                <div className="md:flex-1 md:pr-8 w-full">
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-2">
                        <h2 className="text-4xl font-bold text-center md:text-left mb-2">{profile.name}</h2>
                        
                        {/* Profile image on mobile, hidden on desktop */}
                        <div className="block md:hidden transform hover:scale-105 transition-transform duration-300 mb-6">
                            <div className="rotate-3 p-2 rounded-lg shadow-lg">
                                <img
                                    alt="Profile"
                                    className="object-cover w-36 rounded"
                                    src={profile.profileImage || "/placeholder.svg"}
                                    width={192}
                                    height={192}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <p 
                        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify"
                    >
                        {profile.description}
                    </p>
                
                    {profile.resumeUrl && (
                        <div className="mt-4 flex justify-center md:justify-start">
                            <Button 
                                variant="outline" 
                                className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
                                asChild
                            >
                                <a href={profile.resumeUrl} download>
                                    <Download size={16} />
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
                
                {/* Profile image and social icons container for desktop */}
                <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-8">
                    {/* Profile image on desktop, hidden on mobile */}
                    <div className="hidden md:block transform hover:scale-105 transition-transform duration-300 mb-4">
                        <div className="rotate-3 p-2 rounded-lg shadow-lg">
                            <img
                                alt="Profile"
                                className="object-cover w-48 rounded"
                                src={profile.profileImage || "/placeholder.svg"}
                                width={192}
                                height={192}
                            />
                        </div>
                    </div>
                    
                    {profile.socials && (
                        <div className="flex gap-4 justify-center">
                            {profile.socials.github && (
                                <a 
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                            )}
                            {profile.socials.linkedin && (
                                <a 
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                            )}
                            {profile.socials.instagram && (
                                <a 
                                    href={profile.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
