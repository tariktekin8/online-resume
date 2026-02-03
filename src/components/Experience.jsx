import '../index.css'
import data from '../data.json'

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-serif)'
                }}>
                    Work <span className="text-gradient">Experience</span>
                </h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, hsl(var(--color-primary)), transparent)',
                        marginLeft: '20px' // Offset for dot alignment
                    }}></div>

                    {data.experience.map((exp, index) => (
                        <div key={exp.id}
                            className="experience-item"
                            style={{
                                marginBottom: '4rem',
                                paddingLeft: '60px',
                                position: 'relative'
                            }}>
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px', /* (20px line margin + 1px half width) - 10px half dot */
                                top: '0',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'hsl(var(--color-bg))',
                                border: '2px solid hsl(var(--color-primary))',
                                boxShadow: `0 0 10px hsla(var(--color-primary), 0.5)`
                            }}></div>

                            <div className="glass" style={{ padding: '2rem' }}>
                                <div
                                    className="experience-header"
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', flex: '1', minWidth: 0 }}>{exp.role}</h3>
                                    <span
                                        className="experience-period"
                                        style={{
                                            color: 'hsl(var(--color-primary))',
                                            fontWeight: '500',
                                            fontSize: '0.9rem',
                                            border: '1px solid hsla(var(--color-primary), 0.3)',
                                            padding: '0.2rem 0.8rem',
                                            borderRadius: '1rem',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                            marginTop: '0.2rem' // Optical alignment with text
                                        }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', color: 'hsl(var(--color-text-muted))', marginBottom: '1rem' }}>
                                    {exp.company}
                                </h4>
                                <p style={{ color: 'hsl(var(--color-text-muted))', lineHeight: '1.7' }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .experience-item {
                        padding-left: 40px !important;
                    }
                    
                    .experience-header {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 0.5rem !important;
                    }
                    
                    .experience-period {
                        margin-top: 0 !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Experience
