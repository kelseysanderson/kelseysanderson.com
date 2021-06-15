import React from 'react';
import ResumePDF from '../../components/ResumePDF';
import resume from '../../../src/assets/resume/ksanderson_resume.pdf';

const Resume = (props) => {
    document.querySelector('#home-link')?.classList.remove('active-nav')
    document.querySelector('#resume-link')?.classList.add('active-nav')
    document.querySelector('#work-link')?.classList.remove('active-nav')
    document.querySelector('#contact-link')?.classList.remove('active-nav')
    
    return (
        <ResumePDF file={resume} />
    )

}

export default Resume