export interface ISkillsFeedProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  order?: 'default' | 'reverse'
  direction?: 'vertical' | 'horizontal'
}

export interface IFeaturedProjectProps {
  labelPos?: 'left' | 'right'
  index: number
  name: string
  link: string
  img: string
  description: string
  isLast?: boolean
}
