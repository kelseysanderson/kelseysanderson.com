import React, { useState } from "react";
import './style.css'
import { Document, Page, pdfjs, } from 'react-pdf';
import resume from '../../../src/assets/resume/ksanderson-resume.pdf';
import useWindowDimensions from '../useWindowDimensions'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePDF = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const { height, width } = useWindowDimensions();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <div className="pdf-container">
            <Document file={props.file} options={{ workerSrc: "/pdf.worker.js" }} onLoadSuccess={onDocumentLoadSuccess}>
                <a href={resume} target="_blank" rel="noreferrer">
                   {width <= 500 ? 
                   <Page pageNumber={pageNumber} width={375} />
                    :  width <= 900 ? 
                    <Page pageNumber={pageNumber} width={375} />
                     : 
                    <Page pageNumber={pageNumber} width={700} />
                   }
                </a>
            </Document>
        </div>
    );
}

export default ResumePDF