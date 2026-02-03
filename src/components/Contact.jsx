import '../index.css'
import data from '../data.json'

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-serif)'
                }}>
                    Let's Work <span className="text-gradient">Together</span>
                </h2>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'hsl(var(--color-text-muted))',
                    marginBottom: '3rem',
                    lineHeight: '1.6'
                }}>
                    I'm currently available for freelance projects and full-time opportunities.
                    If you're interested in building something awesome, feel free to reach out!
                </p>

                <a
                    href={`mailto:${data.personal.email}`}
                    className="btn btn-primary"
                    style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                >
                    Say Hello
                </a>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    {data.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '1.1rem',
                                color: 'hsl(var(--color-text-muted))',
                                borderBottom: '1px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'hsl(var(--color-primary))';
                                e.target.style.borderBottomColor = 'hsl(var(--color-primary))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'hsl(var(--color-text-muted))';
                                e.target.style.borderBottomColor = 'transparent';
                            }}
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
