import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../components/Avatar';
import CardList from '../components/CardList';
import ScrollIndicator from '../components/ScrollIndicator';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css'

const data = [
  {
    image: '/cover@2x.png',
    title: 'Kingsoft Office Design System',
    subtitle: '金山办公设计系统',
    tags: ['Tag 1', 'Tag 2'],
  },
  {
    image: '/cover@2x.png',
    title: 'Digital Pay',
    subtitle: '数字支付',
    tags: ['Tag 3', 'Tag 4'],
  },
  {
    image: '/cover@2x.png',
    title: 'Title 3',
    subtitle: 'Subtitle 2',
    tags: ['Tag 3', 'Tag 4'],
  },
  {
    image: '/cover@2x.png',
    title: 'Title 4',
    subtitle: 'Subtitle 2',
    tags: ['Tag 3', 'Tag 4'],
  },
  {
    image: '/cover@2x.png',
    title: 'Title 5',
    subtitle: 'Subtitle 2',
    tags: ['Tag 3', 'Tag 4'],
  },
  {
    image: '/cover@2x.png',
    title: 'Title 6',
    subtitle: 'Subtitle 2',
    tags: ['Tag 3', 'Tag 4'],
  },
]

export default function Home() {
  return (
    <div >
      <Head>
        <title>Charles Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollIndicator/>
      <main className='container px-5 flex flex-col  mx-auto pt-16  xl:flex-row'>
        <div id='left-container' className='mx-auto  w-auto mb-20 xl:w-1/2 xl:mr-8'>
          <div className='text-center top-16 xl:mr-8 xl:sticky  2xl:ml-20  xl:text-left xl:ml-0'>
            <div className='flex flex-row justify-center xl:justify-start'>
            <Avatar src="/myphoto@2x.png" alt="User Avatar" size={140} />
            </div>
            <div className='mt-8 '>
              <h1 className="text-4xl text-gray-900 font-bold ">
                Charles
              </h1>
              <div className='text-lg gap-2 leading-relaxed text-gray-800 flex flex-col mt-4'>
                <p>
                  UI/UX Designer
                </p>
                <p>
                  Currently @ Kingsoft Office MUI Team.<br/>Designing KingSoft Office Design Systems.
                </p>
                <p>
                  🧑🏻‍💻 I design and code.<br/>
                  🐱 Living with 4 cats.
                </p>
              </div>
            </div>
          

          <HStack className='justify-center xl:justify-start' spacing='16px' marginTop={5}>
          <Link href="https://dribbble.com/mumumycat">
          <Image className={styles.socialIcon} src="/icon-dribbble.svg" alt="me" width="24" height="24" />
          </Link>
          <Link href="https://github.com/Charles026">
          <Image className={styles.socialIcon} src="/icon-github.svg" alt="me" width="24" height="24" />
          </Link>
          <Link href="https://www.instagram.com/bancs_pine/">
          <Image className={styles.socialIcon} src="/icon-instagram.svg" alt="me" width="24" height="24" />
          </Link>
          <Popover trigger="hover" isLazy >
          <PopoverTrigger >
          <Image className={styles.socialIcon} src="/icon-weixin.svg" alt="me" width="24" height="24" />
          </PopoverTrigger>
          <PopoverContent width='auto' boxShadow="var(--chakra-shadows-xl)">
            <PopoverBody>
            <Image src="/qrcode@2x.png" alt="me" width="200" height="200" />
            </PopoverBody>
          </PopoverContent>
          </Popover>
          </HStack>

          </div>
        </div>

        <div className='mx-auto  mb-10'>
          <h1 className='text-xl mb-6 text-gray-900 font-semibold  text-center xl:text-left'>Projects</h1>
          <CardList data={data} />
        </div>

       
      </main>
    </div>
  )
}
