import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Form is valid
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset submitted message after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } else {
            setErrors(newErrors);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'vksoundar2020@gmail.com',
            link: 'mailto:vksoundar2020@gmail.com',
        },
        {
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+91 9361513600',
            link: 'tel:+919361513600',
        },
        {
            icon: <MapPin size={24} />,
            label: 'Location',
            value: 'Namakkal, Tamil Nadu, India',
            link: null,
        },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={24} />,
            url: 'https://github.com/Soundar-techie',
            color: 'hover:bg-gray-700',
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={24} />,
            url: 'https://linkedin.com/in/soundark',
            color: 'hover:bg-blue-600',
        },
        {
            name: 'Twitter',
            icon: <Twitter size={24} />,
            url: 'https://x.com/Joker513600?t=jpSRGix0MySIFD-9_a9u1g&s=09',
            color: 'hover:bg-blue-500',
        },
    ];

    return (
        <div className="min-h-screen pt-16">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                            Get In Touch
                        </h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto"></div>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Have a project in mind or just want to chat? Feel free to reach out.
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Send Me a Message
                                </h2>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-lg flex items-center gap-3 text-green-400">
                                        <CheckCircle2 size={24} />
                                        <span>Thank you! Your message has been sent successfully.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.message ? 'border-red-500' : 'border-gray-600'
                                                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none`}
                                            placeholder="Your message here..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Contact Details */}
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Contact Information
                                </h2>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="p-3 bg-primary-600/20 rounded-lg text-primary-400 flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                                                {info.link ? (
                                                    <a
                                                        href={info.link}
                                                        className="text-white hover:text-primary-400 transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Connect With Me
                                </h2>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-gray-700 ${social.color} rounded-lg transition-all duration-300 hover:scale-110`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="bg-gradient-to-r from-primary-600/10 to-primary-800/10 rounded-xl p-6 border border-primary-600/30">
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    Availability
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I'm currently open to freelance projects and full-time opportunities.
                                    I typically respond to messages within 24 hours during business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;