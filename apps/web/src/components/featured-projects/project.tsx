import { akshar, roboto, rokkit } from '@/assets/fonts'
import { cn } from '@/lib/utils'
import { IFeaturedProjectProps } from '@/types'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { motion } from 'motion/react'

const Project = ({
  index,
  name,
  link,
  img,
  description,
  isLast,
  labelPos = 'left',
}: IFeaturedProjectProps) => {
  return (
    <section className="h-screen w-screen relative flex items-center snap-center">
      <div
        className={cn(
          'bg-black opacity-55 h-full w-1/2 xl:w-1/3 min-w-[10rem] flex place-items-center place-content-center px-12',

          labelPos === 'right' ? 'absolute right-0' : '',
        )}
      >
        <div className="text-white flex flex-col gap-2">
          <h1
            className={cn('text-5xl md:text-8xl opacity-80', akshar.className)}
          >
            0{index}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">{name}</h2>
          <div
            className={cn(
              'mt-3 flex flex-col gap-1 max-md:text-sm',
              roboto.className,
            )}
          >
            <p>{description}</p>
            <div className="flex items-center font-semibold hover:opacity-85 transition-opacity duration-200 whitespace-pre">
              <Link href={link}>View Project</Link>
              <ArrowRight className="h-4" />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={img}
        alt={name}
        className={cn(
          'absolute lg:right-20 4xl:right-72 -z-10 max-h-[120vh]',
          labelPos === 'right' ? 'lg:left-20 4xl:left-72' : '',
        )}
        width={1000}
        height={100}
      />
      {isLast && (
        <motion.div
          className={cn('absolute left-1/2 bottom-10 ', rokkit)}
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link href={'https://github.com/EcchiGrill'}>
            <Button className="p-6 px-7 text-xl">
              Explore More <ArrowUpRight className="min-w-6 min-h-6" />
            </Button>
          </Link>
        </motion.div>
      )}
    </section>
  )
}

export default Project
