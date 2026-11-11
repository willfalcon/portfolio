// Every screenshot has a 640px copy beside it (name-640.jpg); the browser picks by width.
const dims: Record<string, [number, number]> = {
  '/work/mdhs-home.jpg': [1256, 1433],
  '/work/mdhs-blocks.jpg': [1280, 960],
  '/work/mdhs-county.jpg': [1040, 780],
  '/work/mdhs-procurement.jpg': [1280, 960],
  '/work/m2l-home.jpg': [1280, 960],
  '/work/m2l-rows.jpg': [1280, 960],
};

export function responsive(src: string, sizes: string) {
  const [width, height] = dims[src];
  return { src, width, height, sizes, srcSet: `${src.replace('.jpg', '-640.jpg')} 640w, ${src} ${width}w` };
}
