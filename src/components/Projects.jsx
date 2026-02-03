import '../index.css'
import data from '../data.json'

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-serif)'
                }}>
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {data.projects.map((project) => (
                        <div key={project.id} className="glass" style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                    {project.title}
                                </h3>
                                <h4 style={{ fontSize: '1rem', color: 'hsl(var(--color-secondary))', marginBottom: '1rem' }}>
                                    {project.role}
                                </h4>
                                <p style={{ color: 'hsl(var(--color-text-muted))', marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} style={{
                                            fontSize: '0.8rem',
                                            padding: '0.2rem 0.6rem',
                                            background: 'hsla(var(--color-primary), 0.1)',
                                            color: 'hsl(var(--color-primary))',
                                            borderRadius: '1rem'
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
