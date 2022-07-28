import { format, parse, parseISO } from 'date-fns'

export function formatDate(
  dateString: string,
  parseFormat = 'yyyy-MM-dd',
  displayFormat = 'dd MMM yyyy',
  isISOString = false,
): string {
  if (!dateString) {
    return ''
  }
  const parsedDate = isISOString
    ? parseISO(dateString)
    : parse(dateString, parseFormat, new Date())
  return format(parsedDate, displayFormat)
}
