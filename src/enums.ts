export enum FileLocation {
	contentTypes = '[Content_Types].xml',
	relationships = '_rels/.rels',

	// All other bundle file names are determined by _rels/.rels. What follows are some
	// sensible/conventional defaults:

	comments = 'word/comments.xml',
	coreProperties = 'docProps/core.xml',
	mainDocument = 'word/document.xml',
	numbering = 'word/numbering.xml',
	settings = 'word/settings.xml',
	styles = 'word/styles.xml',
}

export enum FileMime {
	// Extension defaults
	rels = 'application/vnd.openxmlformats-package.relationships+xml',
	xml = 'application/xml',

	// Overrides
	coreProperties = 'application/vnd.openxmlformats-package.core-properties+xml',
	endnotes = 'application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml',
	extendedProperties = 'application/vnd.openxmlformats-officedocument.extended-properties+xml',
	fontTable = 'application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml',
	footer = 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml',
	footnotes = 'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml',
	header = 'application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml',
	mainDocument = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml',
	relationships = 'application/vnd.openxmlformats-package.relationships+xml',
	settings = 'application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml',
	styles = 'application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml',
	theme = 'application/vnd.openxmlformats-officedocument.theme+xml',
	webSettings = 'application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml',
	comments = 'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml',
	numbering = 'application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml',

	// Binary content types
	jpeg = 'image/jpeg',
	png = 'image/png',
	gif = 'image/gif',
}
