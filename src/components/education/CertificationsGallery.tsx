import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface CertificationImage {
  src: string;
  alt: string;
}

const certifications: CertificationImage[] = [
  {
    src: "/images/certifications/cybersec_prov.jpg",
    alt: "Cybersecurity Provincial Level Certification",
  },
  {
    src: "/images/certifications/cysa.png",
    alt: "CompTIA CYSA+ Certification",
  },
  {
    src: "/images/certifications/pcap.jpg",
    alt: "PCAP Python Certification",
  },
  {
    src: "/images/certifications/bootcamp_bsi.jpg",
    alt: "BSI Bootcamp Certification",
  },
];

export function CertificationsGallery() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-card"
          >
            <Zoom>
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </Zoom>
            <div className="p-4">
              <h3 className="text-lg font-medium">{cert.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
