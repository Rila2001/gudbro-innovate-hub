import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GUDBRO</h3>
            <p className="text-white/70 mb-4">
              Where Innovation Meets Practicality
            </p>
            <p className="text-sm text-white/60">
              Flagship Product Company of IAT Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@gudbro.ai</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="text-sm">IAT Technologies Campus<br />Innovation Drive, Tech City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} GUDBRO - IAT Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
