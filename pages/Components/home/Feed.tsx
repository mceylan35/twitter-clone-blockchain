import { BsStars } from "react-icons/bs"
import Post from "../Post"
import TweetBox from "./TweetBox"


const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
  interface Tweet{
    author:TweetAuthor;
    tweet:string;
    timestamp:string;
  }
  interface TweetAuthor{
      name:string;
      walletAddress:string;
      isProfileImageNft:boolean;
  }

  const tweets=[{
      displayName:'Mehmet',
      userName:'x8Cdf30F6fasd58asd1asd1a5s',
      avatar:'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      isProfileImageNft:true,
       text:'asd',
       timestamp:'2020-06-01T12:00:00.000Z'

  },
  {
    displayName:'Mehmet',
    userName:'x8Cdf30F6fasd58asd1asd1a5s',
    avatar:'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
    isProfileImageNft:true,
      text:'sadasd',
      timestamp:'2020-06-01T12:00:00.000Z'

},{
    displayName:'Mehmet',
    userName:'x8Cdf30F6fasd58asd1asd1a5s',
    avatar:'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
    isProfileImageNft:true,
      text:'asd',
      timestamp:'2020-06-01T12:00:00.000Z'

},{
    displayName:'Mehmet',
    userName:'x8Cdf30F6fasd58asd1asd1a5s',
    avatar:'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
    isProfileImageNft:true,
      text:'asd',
      timestamp:'2020-06-01T12:00:00.000Z'

},{
    displayName:'Mehmet',
    userName:'x8Cdf30F6fasd58asd1asd1a5s',
    avatar:'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
    isProfileImageNft:true,
      text:'asd',
      timestamp:'2020-06-01T12:00:00.000Z'

}]

function Feed(){
    return(<div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox/>
        {tweets.map((tweet, index: number) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0,9)}...`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>)
}
export default Feed;