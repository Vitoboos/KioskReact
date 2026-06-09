interface PdfDocument {
    id: string;
    title: string;
    url: string;
    filename: string;
}

const pdfModules = import.meta.glob('/src/assets/pdf/reglamento/*.pdf', {
    eager: true,
    query: '?url',
    import: 'default',
});

export const pdfDocuments: PdfDocument[] = Object.entries(pdfModules).map(
    ([path, url]) => {
        const filename = path.split('/').pop()!;
        const nameWithoutExt = filename.replace('.pdf', '');
        const title = nameWithoutExt

        return {
            id: nameWithoutExt.toLowerCase().replace(/\s+/g, '-'),
            title,
            url: url as string,
            filename,
        };
    }
);

