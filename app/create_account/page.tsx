'use client';
import Form from '@/ui/form';
<<<<<<< HEAD
=======
import { NavItem, Navlink_all } from '@/ui/nav_link';
>>>>>>> 23f6fe8dd523d2e3f06370219a85eb652937aa30
import NavLink from '@/ui/nav_link/navlink';

export default function NewAccount() {
  return (
    <>
<<<<<<< HEAD
=======
      <Navlink_all>
        <NavItem>
          <NavLink className="mb-2">1</NavLink>
          <p>基本情報</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">2</NavLink>
          <p>事前診断</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">3</NavLink>
          <p>診断結果</p>
        </NavItem>
        <NavItem className="opacity-50">
          <NavLink className="mb-2">4</NavLink>
          <p>登録完了</p>
        </NavItem>
      </Navlink_all>
>>>>>>> 23f6fe8dd523d2e3f06370219a85eb652937aa30
      <Form />
    </>
  );
}
