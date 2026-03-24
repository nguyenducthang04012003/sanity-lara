import VisualizerClient from './VisualizerClient'
import {getVisualizerData} from '@/sanity/lib/api'

export default async function VisualizerPage() {
  const visualizerData = await getVisualizerData()

  console.log('visualizerData', visualizerData)

  return <VisualizerClient data={visualizerData} />
}
