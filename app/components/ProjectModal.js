import React from 'react';
import PropTypes from 'prop-types';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    // Close modal when clicking outside of it
    const handleCloseOnClickOutside = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    // Close modal when pressing ESC key
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-90"
            onClick={handleCloseOnClickOutside}
            onKeyPress={handleKeyPress}
            tabIndex={0}
            aria-label="Close modal"
        >
            <div className="relative w-full max-w-lg p-6 rounded-md bg-bg-subtle dark:bg-dark-bg-subtle">
                {/* <button onClick={onClose} className='absolute text-2xl text-blue-500 right-4'>X</button> */}
                <h2 className="mb-3 text-xl font-bold text-center">{project.title}</h2>
                <div className="w-full rounded-xl carousel">
                    {project.screenshots.map((screenshot, index) => (
                        <div id={`slide${index}`} className="relative w-full carousel-item" key={index}>
                            <img src={screenshot} alt={`Screenshot ${index + 1}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${index - 1 < 0 ? project.screenshots.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${index + 1 >= project.screenshots.length ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='pt-4'>{project.description}</p>
                <ul className="flex justify-start gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
                        <li key={idx} className="tooltip group">
                            <img src={project.icons[idx + 1]} alt={tech} className="w-[20px] h-[20px]" />
                            <span className="tooltiptext">{tech}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ProjectModal.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icons: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string,
        github: PropTypes.string,
        screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default ProjectModal;
