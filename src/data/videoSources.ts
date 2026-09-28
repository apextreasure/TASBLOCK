// Public delivery URLs supplied by the site owner. No credentials are needed.
export const hostedVideos: Record<string, string> = {
  'impact-clay-brick.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625253/impact-clay-brick.mp4',
  'tasblock-wall-assembly-timelapse.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625275/tasblock-wall-assembly-timelapse.mp4',
  'wave-test.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625261/wave-test.mp4',
  'tasblock-wall-dismantling-timelapse.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625257/tasblock-wall-dismantling-timelapse.mp4',
  'impact-tasblock.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625257/impact-tasblock.mp4',
  'system-animation-cropped.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625252/system-animation-cropped.mp4',
  'impact-cement-brick.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625249/impact-cement-brick.mp4',
  'post-test-dismantling.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625246/post-test-dismantling.mp4',
  'fire-demonstration.mp4': 'https://res.cloudinary.com/at7xro86/video/upload/v1790625246/fire-demonstration.mp4',
};

export function videoSource(file: string): string {
  const base = (import.meta.env.VITE_TASBLOCK_VIDEO_BASE_URL || '').replace(/\/+$/, '');
  if (base) return `${base}/${file}`;
  if (hostedVideos[file]) return hostedVideos[file];
  return import.meta.env.DEV ? `/videos/tasblock/${file}` : '';
}
