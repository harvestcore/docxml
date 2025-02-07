import { Archive } from '../../classes/Archive.ts';
import { UnhandledXmlFile } from '../../classes/XmlFile.ts';
import { FileMime } from '../../enums.ts';

export class FontTable extends UnhandledXmlFile {
	public static contentType = FileMime.fontTable;

	/**
	 * Instantiate this class by looking at the DOCX XML for it.
	 */
	public static async fromArchive(archive: Archive, location: string): Promise<FontTable> {
		return new FontTable(location, await archive.readText(location));
	}
}
