import NavLink from '@/ui/nav_link/navlink';
import NavLink_now from '@/ui/nav_link/navlink_now';
import styled from 'styled-components';

const Navlink_all = styled.div`
  width: 100%;
  height: 70px;
  padding: 32px;
  font-size: 12px;
  display: flex;

  align-items: flex-start;
  justify-content: space-around;
`;

const Border = styled.div`
  width: 34px;
  height: 2px;
  background: linear-gradient(
    -90deg,
    rgba(244, 188, 247, 1) 0%,
    rgba(154, 229, 225, 1) 100%
  );
`;

export default function Navlink() {
  return (
    <>
      {' '}
      <Navlink_all>
        {/* <NavLink_now></NavLink_now> */}
        <div className="flex flex-col items-center">
          <NavLink className="mb-2">1</NavLink>
          <p>基本情報</p>
        </div>
        <Border className="mt-4" />
        <div className="flex flex-col items-center opacity-60">
          <NavLink className="mb-2">2</NavLink>
          <p>本人認証</p>
        </div>
        <Border className="mt-4 opacity-60" />

        <div className="flex flex-col items-center opacity-60">
          <NavLink className="mb-2">3</NavLink>
          <p>事前診断</p>
        </div>
        <Border className="mt-4 opacity-60" />

        <div className="flex flex-col items-center opacity-60">
          <NavLink className="mb-2">4</NavLink>
          <p>診断確認</p>
        </div>
      </Navlink_all>
    </>
  );
}
