import React from 'react'
import NewsPage from './NewsPage'
import SelectedNews from './ElectedNewsPage'

const HomePage = ({allNews}) => {
    
    const [firstNews, secondNews, ...otherNews] = allNews.data

    return (
        <>
            <NewsPage mainNews={firstNews} />
            <SelectedNews seclactedNews={secondNews} />
        </>
    )
}

export default HomePage