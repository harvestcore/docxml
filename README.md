# DOCX Markup Language

This is a [Deno](https://deno.land) module for making `.docx` files from scratch or from an existing DOCX/DOTX template. It will probably be [published for NodeJS soon™ too](https://github.com/wvbe/docxml/issues/8).

`docxml` is designed to be used in vanilla JavaScript using class instances, or using JSX if you're on Deno or want to use a transpiler like Babel:

```ts
const para = new Paragraph(
	{ alignment: 'center' },
	new Text({}, 'I want a cookie')
);
```

```tsx
/** @jsx Docx.jsx */
const para = (
	<Paragraph alignment="center">
		<Text>I want a cookie</Text>
	</Paragraph>
);
```

[👉 More on using class instances](https://github.com/wvbe/docxml/wiki/Get-started#using-jsx)

[👉 More on using JSX](https://github.com/wvbe/docxml/wiki/Get-started#using-jsx)

`docxml` is also designed to be used from scratch/entirely programmatically, or using a more ergonomic API
to transform from an XML document. Both modes work equally well with vanilla JS or JSX.

```tsx
await Docx.fromJsx(
	<Paragraph alignment="center">
		<Text>I want a cookie</Text>
	</Paragraph>,
).toFile('example-1.docx');
```

```tsx
await Docx.fromNothing()
	.withXmlRule(
		'self::text()',
		({ node }) => <Text>{node.nodeValue}</Text>
	)
	.withXmlRule(
		'self::p',
		({ traverse, node }) => (
			<Paragraph alignment={node.getAttribute('align')}>
				{traverse()}
			</Paragraph>
		)
	)
	.withXml(`<p align="center">I want a cookie</p>`, {})
	.toFile('example-2.docx');
```

[👉 More on XML rendering rules](https://github.com/wvbe/docxml/wiki/Get-started#rendering-xml)

[👉 Go to the API docs that Deno generates for docxml](https://deno.land/x/docxml@5.2.0/mod.ts)

# Features

To great or small extend, the following features work in the current version of `docxml`. Some items are not ticked off yet -- they are not available, but hopefully soon.

[👉 See code examples of some or the more intricate features](https://github.com/wvbe/docxml/wiki/Examples)

**API features:**

- [x] Asynchronous components
- [x] Component composition

**Custom styles:**

- [x] Font size and color
- [x] Bold, italic, underline styles, strike-through
- [x] Subscript, superscript, small caps
- [x] Paragraph spacing and indentation
- [x] Left/right/center/justified alignment
- [ ] Aligning text on tabs
- [x] Font family
- [ ] Embed TTF in the DOCX file

**References:**

- [x] Cross references
- [ ] Table of contents

**Tables:**

- [x] Colspans and rowspans
- [x] Cell borders
- [x] [Table borders](http://officeopenxml.com/WPtableBorders.php)
- [x] [Conditional formatting](http://officeopenxml.com/WPtblLook.php)

**Images:**

- [x] From any `UInt8Array` source
- [x] Alternative and title text
- [x] Width and height

**Sections:**

- [x] Width and height
- [x] Orientation

**Comments:**

- [x] Point comment
- [x] Range comment
- [ ] Comment reply

**Change tracking:**

- [x] Text additions and deletions
- [x] Style changes
- [x] Table row additions and deletions

# Differences with actual MS Word DOCX

Obviously `docxml` is a TypeScript project, which is already very different from how you would normally interact
with a DOCX document. More meaningfully however, `docxml` is meant to make writing DOCX _easier_ than going straight
to OOXML. For example;

- All sizes are of type `Length`, which means it doesn't matter wether you input them as points, centimeters,
  inches, 1/2, 1/8th or 1/20th points, English Metric Units, and so on.
- The JSX pragma will try to correct components that would lead to invalid XML structures, by splitting the parents of
  invalidly placed components recursively until the new position is valid. Moreover, string content in unexpected places
  is automatically wrapped in `<Text>` when using JSX. This makes the configuration of a new DOCX a little more
  forgiving.
- Using the `<Image>` or `<Comment>` components will automatically create all required relationships etc.
- Some of the words have changed, generally speaking `docxml` is more verbose than the DOCX verbiage.
- Generally speaking `docxml` prefers formal (JS) references over references-by-identifier. In those cases the
  identifiers are randomly generated for you when the `.docx` file is written.
- Especially in tables and images, a lot of formatting details are automatically applied. In a lot of cases there
  is no API _yet_ to change them.

# For contributors

```sh
# Run all unit tests
deno task test


# Run all linting
deno task lint
```
