import React from 'react';
import ResumePDF from '../../components/ResumePDF';
import resume from '../../../src/assets/resume/ksanderson_resume.pdf';

const Resume = (props) => {
    return (
        <ResumePDF file={resume} />
    )

}

export default Resume