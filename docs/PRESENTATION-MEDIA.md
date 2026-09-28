# Presentation media integration

Images and video posters are committed under public/images/tasblock. Local MP4 masters remain outside public/ and are excluded from Git; production video delivery uses Cloudinary.

All nine public video URLs are mapped by filename in src/data/videoSources.ts and used by both video components in development and production. No API key is required. Leave VITE_TASBLOCK_VIDEO_BASE_URL empty to use Cloudinary. An explicit value overrides the map for deployments using another host.

Video loading begins on user interaction. Native controls support playback and seeking. All nine Cloudinary URLs returned video/mp4 with HTTP 206 byte-range responses during validation. TypeScript and the production build passed; browser playback still needs checking on the deployed origin.

The cropped system animation removes 32 pixels at the top and bottom using H.264 crop metadata without re-encoding; original is retained locally. Additional source/provenance records are in the other docs files and src/data/presentationAssets.ts.

Development: npm ci, npm run dev. Build: npm run build. Optional local masters in media/tasblock are available through the development middleware for assets without a hosted mapping.
