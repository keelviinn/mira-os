/**
 * i.e. "care_navigator" -> "Care Navigator"
 * 
 * @param title 
 * @returns 
 */

export function parseMiraCareOptionTitle(title: string) {
  return title.replace(/_/g, " ");
}
