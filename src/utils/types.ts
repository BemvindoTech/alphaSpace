export type News = {
    id: number,
    title: string,
    authors: [
        {
          name: string,
          socials: {
            x: string,
            youtube: string,
            instagram: string,
            linkedin: string,
            mastodon: string,
            bluesky: string
          }
        }
      ],
      url: string,
      image_url: string,
      news_site: string,
      summary: string,
      published_at: string,
      updated_at: string,
      featured: boolean,
      launches: [
        {
          launch_id: string,
          provider: string
        }
      ],
      events: [
        {
          event_id: number,
          provider: string
        }
      ]
    
} 


export type snapiResponse = {
    count: number,
    next: string,
    previous: string,
    results: News[]
} 