import {NextResponse} from 'next/server'

export async function POST(request: Request) {
  const {weatherData} = await request.json()
  console.log({weatherData}) // ! debug
  return NextResponse.json({
    content: `Ladies and gentlemen, brace yourselves for a sun-soaked day! 
    The current temperature in Miami is expected to reach a delightful high of 11.1 degrees 
    Celsius. The winds are blowing at a comfortable speed of 8.7 kilometers per hour, 
    coming from the direction of 7 degrees.
    Now, let's take a look at the hourly forecast for today. The temperature will range 
    from 11.5 degrees Celsius to 12.2 degrees Celsius throughout the day, gradually 
    warming up. You might want to consider shedding a layer or two as the day progresses.
    But wait, there's more! Our trusty data team has provided us with some valuable 
    information about the UV index. It's always important to protect our skin, especially 
    in this radiant weather. The UV index will peak at 5.25, so don't forget to slather on 
    that sunscreen, wear a hat, and seek shade during the sun's strongest hours.
    Remember, folks, SPF is your friend! Let's keep those sunburns at bay and enjoy the 
    gorgeous Miami weather responsibly. 
    Now, let's lighten the mood with a weather-related joke. How about this one? Why did the 
    sun go to school? To get brighter, of course!
    That's all for now, Miami! Stay tuned for more updates throughout the day. Enjoy the 
    sunshine, stay cool, and have a fantastic day in this beautiful city!`,
  })
}
