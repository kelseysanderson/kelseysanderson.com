import React, { useState } from "react";
import './style.css'
import { Document, Page, pdfjs,  } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/**
* @author
* @function ResumePDF
**/

const ResumePDF = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    

    return (

        <div className="pdf-container">

            <Document
                file={{ url: 'https://kelseysanderson.github.io/react-portfolio/static/media/ksanderson-resume.2d4863d5.pdf' }}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                pageNumber={pageNumber} 
                scale={1.5}
                />
            </Document>
        </div>        
    );
}

export default ResumePDF