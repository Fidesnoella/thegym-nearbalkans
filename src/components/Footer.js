import React from 'react';
import Link  from 'next/link';

import Image from 'next/image';
import balkans from '../../public/assets/icons/balkans.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import discord from '../../public/assets/icons/discord.svg';
import telegram from '../../public/assets/icons/telegram.svg';
import facebook from '../../public/assets/icons/facebook.svg';
import linkedIn from '../../public/assets/icons/linkedIn.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import medium from '../../public/assets/icons/medium.svg';

function Footer(props) {
    return (
        <div className='mt-24 mx-auto container'>
        <div className='text-center text-lg flex flex-col gap-y-5 px-6 lg:px-0 text-dark pb-20'>
          <h6>
            Visit <span className='font-bold cursor-pointer'>nearbalkans.org </span>
             and make sure to follow us on our social and community channels!
          </h6>
          <div className='flex justify-center gap-x-10'>
            <div className='hidden lg:block'>
              <Link href="#">
                <Image src={balkans} />
              </Link>
            </div>
            <div className='hidden lg:block lg:border-gray-200 border-solid border-r-2'></div>
            <div className='flex items-center gap-x-5'>
            <div>
              <Link href="#">
                <Image src={twitter} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={discord} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={telegram} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={facebook} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={linkedIn} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={instagram} />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src={medium} />
              </Link>
            </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center gap-x-8 items-center'>
             <div>
              <Link href="#">
              <p>NEAR Balkans 2022</p>
              </Link>
             </div>
             <div>
              <Link href="#">
              <p>info@nearbalkans.org</p>
              </Link>
             </div>
             <div>
              <Link href="#">
              <p>Privacy Policy</p>
              </Link>
             </div>
             <div>
              <Link href="#">
              <p>Cookie Policy</p>
              </Link>
             </div>
             <div>
              <Link href="#">
              <p>Terms & Conditions</p>
              </Link>
             </div>
          </div>
          <h6 class="text-center">NEAR Balkans Hub: Bosnia &amp; Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</h6>
        </div>
      </div>
    );
}

export default Footer;