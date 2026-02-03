import '../index.css'
import data from '../data.json'

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-serif)'
                }}>
                    Technical <span className="text-gradient">Skills</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {data.skills.map((skillGroup, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                color: 'hsl(var(--color-primary))',
                                textAlign: 'center'
                            }}>
                                {skillGroup.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                                {skillGroup.items.map((item) => (
                                    <span key={item} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'hsla(var(--color-bg), 0.5)',
                                        borderRadius: '2rem',
                                        fontSize: '0.9rem',
                                        border: '1px solid hsla(var(--color-text), 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = 'hsl(var(--color-secondary))';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'hsla(var(--color-text), 0.1)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
