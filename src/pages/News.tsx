import { snapiCustomFetch } from "@/utils/customFetch"
import type { NewsResponse } from "@/utils/types"
import type { LoaderFunction } from "react-router-dom"

const newsParams ={
  news_site_exclude:"SpacePolicyOnline.com",
  limit:20,
  ordering: "published_at"
}

export const newPageLoader : LoaderFunction = async(): Promise<NewsResponse | null> => {
  try {
    const formatedParams = {... newsParams}
    const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formatedParams,
    }
    )
    return response.data
  } catch (error) {
    console.log(error);
    
    return null
  }
}

export const News = () => {
  return (
    <div>News</div>
  )
}
