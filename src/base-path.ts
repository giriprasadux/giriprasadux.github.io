/** Empty at a root address, or the subfolder the site is hosted in. next/link adds it by itself; plain URLs need it. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
