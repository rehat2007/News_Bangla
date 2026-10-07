import NewsPage from './NewsPage'
import SelectedNews from './ElectedNewsPage'
import OthersNews from './OthersNews'

const HomePage = ({allNews}) => {
    
    const [firstNews, secondNews, ...otherNews] = allNews.data
   
    return (
        <>
            <NewsPage mainNews={firstNews} />
            <SelectedNews seclactedNews={secondNews} />
            <OthersNews othersNews = {otherNews}/>
        </>
    )
}

export default HomePage