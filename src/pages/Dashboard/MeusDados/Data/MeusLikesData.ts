import HeartImage from '../assets/second_heart-svgrepo-com 5.svg'
interface CardLikesType {
  title: string,
  paragraph: string,
  icon_like: string,
}

export const CardLikes: CardLikesType[] = [
  {
    title: "SAMPLE TITLE",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    icon_like: `${HeartImage}`
  }
]