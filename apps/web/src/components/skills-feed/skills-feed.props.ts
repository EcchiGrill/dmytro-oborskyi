export interface ISkillsFeedProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  order?: 'default' | 'reverse'
  direction?: 'vertical' | 'horizontal'
}
