import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">next-map</div>
        <div className="navbar_list">
          <Link href="/stores" className="navbar_list--item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar_list--item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar_list--item">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar_list--item">
            로그인
          </Link>
        </div>
        {/* 모바일버전 */}
        <div className="navbar_button" role="presentation" onClick={() => setIsOpen(val => !val)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {/* 모바일버전 메뉴 */}
      {isOpen && (
        <div className="navbar-mobile">
          <div className="navbar_menu-mobile">
            <Link href="/stores" className="navbar_menu--item-mobile">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar_menu--item-mobile">
              맛집 등록
            </Link>
            <Link href="/users/likes" className="navbar_menu--item-mobile">
              찜한 가게
            </Link>
            <Link href="/users/login" className="navbar_menu--item-mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
