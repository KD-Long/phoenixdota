import React, { useState, useEffect } from 'react';

const DocumentViewer = ({ docUrl }) => {
    const [docContent, setDocContent] = useState('');

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch(docUrl);
                const text = await response.text();
                setDocContent(text);
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchDocument();
    }, [docUrl]);

    return (
        <>
            {/* <div className="document-viewer">
           <div className="text-white bg-black p-4">{docContent}</div>
         </div> */}
            <div className="document-viewer flex justify-center overflow-x-clip">
                <div
                    // Making the img overflow and get clipped
                    // max-w-full makes sure content stay inside container
                    // lg: sets large screen max screen size
                    // items-center    --> will center the img but also all the headings (will ask nope to center from doc)
                    className="flex flex-col bg-base-200 mx-1/10 px-1/10 py-16 max-w-full justify-center lg:max-w-[1270px] lg:mx-20 lg:px-20"
                    dangerouslySetInnerHTML={{ __html: docContent }}
                />
            </div>

        </>
    );
};

export default DocumentViewer;