interface PdfDocument {
    id: string;
    title: string;
    url: string;
    filename: string;
}

const pdfModules = import.meta.glob('/src/assets/pdf/contrato/*.pdf', {
    eager: true,
    query: '?url',
    import: 'default',
});

export const pdfDocuments: PdfDocument[] = Object.entries(pdfModules).map(
    ([path, url]) => {
        const filename = path.split('/').pop()!;
        const nameWithoutExt = filename.replace('.pdf', '');

        // Convert kebab-case or snake_case to Title Case
        const title = nameWithoutExt
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        return {
            id: nameWithoutExt.toLowerCase().replace(/\s+/g, '-'),
            title,
            url: url as string,
            filename,
        };
    }
);

// Optional: sort alphabetically by title
// pdfDocuments.sort((a, b) => a.title.localeCompare(b.title));