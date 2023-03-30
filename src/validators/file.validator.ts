const isFileValid = (filename: string) => {
	const ext = filename.split('.').at(-1)
	const validExts = [
		'doc',
		'docx',
		'xls',
		'xlsx',
		'pdf',
		'jpg',
		'jpeg',
		'gif',
		'png',
		'zip',
		'rar',
	]

	return ext ? validExts.includes(ext) : false
}

export default isFileValid
