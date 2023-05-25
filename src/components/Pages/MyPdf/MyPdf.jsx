import { Document } from 'react-pdf'
import React from 'react';
import { Page } from 'react-pdf';
import Blog from '../Blog/Blog';

const MyPdf = () => {
    return (
        <div>
           <Document file='https://github.com/wojtekmaj/react-pdf'>
                <Page></Page>
           </Document>
        </div>
    );
};

export default MyPdf;