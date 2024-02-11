import { HarmBlockThreshold, HarmCategory, VertexAI } from '@google-cloud/vertexai'

import { environment } from 'src/config/environment'

const vertex_ai = new VertexAI({
  project: environment.GOOGLE_PROJECT_ID,
  location: environment.GOOGLE_PROJECT_LOCATION
})

export const vertexAIClient = vertex_ai.preview.getGenerativeModel({
  model: 'gemini-pro',
  safety_settings: [
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    }
  ],
  generation_config: { max_output_tokens: 2048 }
})
