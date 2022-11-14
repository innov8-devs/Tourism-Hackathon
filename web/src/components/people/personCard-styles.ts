import styled from 'styled-components';

export const RecColumnCon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  gap: 1rem;
  @media (max-width: 799px) {
    grid-template-columns: unset;
  }
`;

export const RecColumn = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 300px;
  @media (max-width: 799px) {
    padding: unset;
  }
`;

export const RecCard = styled.div`
  box-shadow: 0px 1.8px 4px rgba(102, 102, 102, 0.25);
  border-radius: 8px;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const FavTag = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: rgba(248, 248, 248, 0.25);
  backdrop-filter: blur(100px);
  border-radius: 50%;
`;

export const Typography = styled.p<{ size: 'md' | 'sm'; bold?: boolean }>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => (props.size == 'md' ? '20px' : '13px')};
  margin: none;
`;

export const InterestsText = styled(Typography)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  /* text */

  color: #402b2b;
`;

export const LocationText = styled(Typography)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 14px;
  /* identical to box height, or 140% */

  color: #ad6600;
`;
