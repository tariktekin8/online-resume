import { useState, useEffect } from 'react'
import '../index.css'
import data from '../data.json'
import profileImg from '../assets/images/me.jpg'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header id="home">
            {/* Navigation */}
            <nav
                className={`fixed-nav ${scrolled ? 'glass' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    padding: scrolled ? '1rem 2rem' : '2rem',
                    zIndex: 1000,
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: 'var(--spacing-container)',
                    margin: '0 auto',
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>
                    {data.personal.name.charAt(0)}<span style={{ color: 'hsl(var(--color-primary))' }}>.</span>
                </div>

                {/* Hamburger Menu Button - Mobile Only */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: '0.5rem',
                        zIndex: 1001
                    }}
                    className="hamburger-menu"
                    aria-label="Toggle menu"
                >
                    <span style={{
                        width: '24px',
                        height: '2px',
                        background: 'hsl(var(--color-text))',
                        transition: 'all 0.3s ease',
                        transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                    }}></span>
                    <span style={{
                        width: '24px',
                        height: '2px',
                        background: 'hsl(var(--color-text))',
                        transition: 'all 0.3s ease',
                        opacity: mobileMenuOpen ? 0 : 1
                    }}></span>
                    <span style={{
                        width: '24px',
                        height: '2px',
                        background: 'hsl(var(--color-text))',
                        transition: 'all 0.3s ease',
                        transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                    }}></span>
                </button>

                <ul
                    className="nav-menu"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center'
                    }}
                >
                    {data.navigation.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    opacity: 0.8
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.opacity = '1';
                                    e.target.style.color = 'hsl(var(--color-primary))';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.opacity = '0.8';
                                    e.target.style.color = 'inherit';
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .hamburger-menu {
                        display: flex !important;
                    }
                    
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: ${mobileMenuOpen ? '0' : '-100%'};
                        height: 100vh;
                        width: 70%;
                        max-width: 300px;
                        background: var(--glass-bg);
                        backdrop-filter: blur(var(--blur));
                        -webkit-backdrop-filter: blur(var(--blur));
                        border-left: 1px solid var(--glass-border);
                        flex-direction: column !important;
                        justify-content: center;
                        align-items: center;
                        gap: 2rem !important;
                        transition: right 0.3s ease;
                        z-index: 1000;
                        padding: 2rem;
                    }
                    
                    .nav-menu li a {
                        font-size: 1.2rem !important;
                    }
                }
            `}</style>

            {/* Hero Section Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .hero-image-container {
                        width: 200px !important;
                        height: 200px !important;
                    }
                    
                    .hero-image-bg {
                        width: 220px !important;
                        height: 220px !important;
                    }
                    
                    .hero-title {
                        font-size: 2.5rem !important;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.1rem !important;
                    }
                    
                    .hero-description {
                        font-size: 1rem !important;
                    }
                    
                    .hero-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    
                    .hero-buttons a {
                        width: 100%;
                        text-align: center;
                    }
                }
                
                @media (max-width: 480px) {
                    .hero-image-container {
                        width: 150px !important;
                        height: 150px !important;
                    }
                    
                    .hero-image-bg {
                        width: 170px !important;
                        height: 170px !important;
                    }
                    
                    .hero-title {
                        font-size: 2rem !important;
                    }
                    
                    .hero-subtitle {
                        font-size: 1rem !important;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section className="section" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '6rem' // account for fixed nav
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3rem',
                    textAlign: 'center'
                }}>

                    {/* Hero Visual/Decoration */}
                    <div style={{ position: 'relative' }}>
                        <div
                            className="hero-image-container"
                            style={{
                                width: '300px',
                                height: '300px',
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: '20%',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px hsla(var(--color-primary), 0.3)'
                            }}>
                            <img
                                src={profileImg}
                                alt={data.personal.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>

                        {/* Circle Background for depth */}
                        <div
                            className="hero-image-bg"
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                left: '-10px',
                                width: '320px',
                                height: '320px',
                                background: 'linear-gradient(45deg, hsla(var(--color-primary), 0.2), hsla(var(--color-secondary), 0.2))',
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>
                    </div>

                    {/* Text Content */}
                    <div style={{ maxWidth: '800px' }}>
                        <h2
                            className="hero-subtitle"
                            style={{
                                fontSize: '1.5rem',
                                color: 'hsl(var(--color-primary))',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                letterSpacing: '2px'
                            }}>
                            HELLO, I'M
                        </h2>
                        <h1
                            className="hero-title"
                            style={{
                                fontSize: '5rem',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                marginBottom: '1.5rem',
                                fontFamily: 'var(--font-serif)'
                            }}>
                            {data.personal.name} <span className="text-gradient">{data.personal.surname}</span>
                        </h1>
                        <p
                            className="hero-description"
                            style={{
                                fontSize: '1.25rem',
                                color: 'hsl(var(--color-text-muted))',
                                maxWidth: '750px',
                                margin: '0 auto 2.5rem'
                            }}>
                            <span style={{ color: 'hsl(var(--color-text))', fontWeight: '500' }}>{data.personal.role}</span> - {data.personal.bio}
                        </p>

                        <div
                            className="hero-buttons"
                            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get In Touch
                            </a>
                            <a href="#experience" className="btn btn-outline">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
