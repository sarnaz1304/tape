import { LenstubePublication } from 'src/types/local'

import { sanitizeIpfsUrl } from './sanitizeIpfsUrl'

export const getVideoUrl = (video: LenstubePublication) => {
  const url = video?.metadata?.media[0]?.original.url
  return sanitizeIpfsUrl(url)
}