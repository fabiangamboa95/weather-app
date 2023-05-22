import openai from '@/openai'
import {NextResponse} from 'next/server'

export async function POST(request: Request) {
  const {weatherData} = await request.json()

  const {data} = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: 'system',
        content: `Pretend you're a weather reporter, presenting LIVE on television.
                  Be energetic and full of charisma.
                  Introduce yourself as Fabian and say you are reporting live from Miami.
                  State the city you are providing a summary for.
                  Then give a summary of todays weather only.
                  Make it easy for the viewer to understand and know what to do to prepare for those
                  weather conditions such as wear SPF if the UV is high etc.
                  Use the uv_index data provided to provide UV advice.
                  Provide a joke regarding the weather.
                  Assume the data came from your news team and not the user.`,
      },
      {
        role: 'user',
        content: `Hi there, can I a summary of todays weather,
                  use the following data: ${JSON.stringify(weatherData)}`,
      },
    ],
  })

  return NextResponse.json(data.choices[0].message)
}
