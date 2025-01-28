import "./pdfviewer.scss"
interface PdfViewerProps {
    pdfUrl: string;
    width?: string;
    height?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, width = '100%', height = '600px' }) => {
    return (
        <div className="pdf-viewer-container">
            <h1 className="pdf-viewer-title">Стоимость услуг</h1>
            <embed
                src={pdfUrl}
                type="application/pdf"
                width={width}
                height={height}
                className="pdf-viewer-embed"
            />
        </div>
    );
};

export default PdfViewer;